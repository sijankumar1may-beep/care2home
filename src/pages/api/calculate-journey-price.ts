import type { NextApiRequest, NextApiResponse } from "next";
import { computeRouteDistance } from "@/lib/compute-route-distance";
import { calculateJourneyPricing } from "@/lib/pricing";
import type { VehicleType } from "@/lib/pricing-config";
import type { JourneyPricingResult } from "@/types/pricing";

type ErrorResponse = {
  error: string;
};

function isValidVehicleType(value: unknown): value is VehicleType {
  return value === "car" || value === "auto";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JourneyPricingResult | ErrorResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Google Maps API key is not configured",
    });
  }

  const {
    originAddress,
    destinationAddress,
    vehicleType,
    originPlaceTypes,
    destinationPlaceTypes,
  } = req.body as {
    originAddress?: string;
    destinationAddress?: string;
    vehicleType?: string;
    originPlaceTypes?: string[];
    destinationPlaceTypes?: string[];
  };

  if (!originAddress?.trim()) {
    return res.status(400).json({ error: "Origin address is required" });
  }
  if (!destinationAddress?.trim()) {
    return res.status(400).json({ error: "Destination address is required" });
  }
  if (!isValidVehicleType(vehicleType)) {
    return res.status(400).json({ error: "Valid vehicle type is required (car or auto)" });
  }

  try {
    const { distanceKm } = await computeRouteDistance(apiKey, {
      originAddress: originAddress.trim(),
      destinationAddress: destinationAddress.trim(),
    });

    const pricing = calculateJourneyPricing({
      distanceKm,
      vehicleType,
      originAddress: originAddress.trim(),
      destinationAddress: destinationAddress.trim(),
      originPlaceTypes: Array.isArray(originPlaceTypes) ? originPlaceTypes : [],
      destinationPlaceTypes: Array.isArray(destinationPlaceTypes)
        ? destinationPlaceTypes
        : [],
    });

    if (!pricing) {
      return res.status(400).json({
        error: "Unable to calculate journey price for the provided distance",
      });
    }

    return res.status(200).json(pricing);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to calculate journey price. Please try again.";

    return res.status(500).json({ error: message });
  }
}
