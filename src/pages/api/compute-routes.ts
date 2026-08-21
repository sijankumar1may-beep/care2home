import type { NextApiRequest, NextApiResponse } from "next";
import { computeRouteDistance } from "@/lib/compute-route-distance";

type SuccessResponse = {
  distanceKm: number;
  distanceMeters: number;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>,
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

  const { originAddress, destinationAddress } = req.body as {
    originAddress?: string;
    destinationAddress?: string;
  };

  if (!originAddress?.trim()) {
    return res.status(400).json({ error: "Origin address is required" });
  }
  if (!destinationAddress?.trim()) {
    return res.status(400).json({ error: "Destination address is required" });
  }

  try {
    const result = await computeRouteDistance(apiKey, {
      originAddress: originAddress.trim(),
      destinationAddress: destinationAddress.trim(),
    });

    return res.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to reach Google Routes API. Please try again.";

    return res.status(500).json({ error: message });
  }
}
