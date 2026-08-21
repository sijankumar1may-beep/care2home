type LatLng = { latitude: number; longitude: number };

type RoutePoint =
  | { address: string }
  | { location: { latLng: LatLng } };

function isValidLatLng(latLng: LatLng): boolean {
  return (
    typeof latLng.latitude === "number" &&
    typeof latLng.longitude === "number" &&
    latLng.latitude >= -90 &&
    latLng.latitude <= 90 &&
    latLng.longitude >= -180 &&
    latLng.longitude <= 180
  );
}

function buildRoutePoint(
  address?: string,
  latLng?: LatLng,
): RoutePoint | null {
  if (address?.trim()) {
    return { address: address.trim() };
  }
  if (latLng && isValidLatLng(latLng)) {
    return { location: { latLng } };
  }
  return null;
}

export type ComputeRouteDistanceInput = {
  originAddress?: string;
  destinationAddress?: string;
};

export type ComputeRouteDistanceResult = {
  distanceKm: number;
  distanceMeters: number;
};

export async function computeRouteDistance(
  apiKey: string,
  input: ComputeRouteDistanceInput,
): Promise<ComputeRouteDistanceResult> {
  const origin = buildRoutePoint(input.originAddress);
  const destination = buildRoutePoint(input.destinationAddress);

  if (!origin) {
    throw new Error("Origin address is required");
  }
  if (!destination) {
    throw new Error("Destination address is required");
  }

  const response = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.distanceMeters",
      },
      body: JSON.stringify({
        origin,
        destination,
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE",
        units: "METRIC",
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || "Failed to calculate route distance";
    throw new Error(message);
  }

  const distanceMeters = data?.routes?.[0]?.distanceMeters;
  if (!distanceMeters || typeof distanceMeters !== "number") {
    throw new Error("No route found between the provided addresses");
  }

  const distanceKm = Math.round((distanceMeters / 1000) * 10) / 10;

  return { distanceKm, distanceMeters };
}
