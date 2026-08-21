import type { NextApiRequest, NextApiResponse } from "next";
import type { AddressSuggestion } from "@/types/address";

type SuccessResponse = {
  suggestions: AddressSuggestion[];
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

  const { input } = req.body as { input?: string };
  const trimmedInput = input?.trim() ?? "";

  if (trimmedInput.length < 2) {
    return res.status(400).json({
      error: "Please enter at least 2 characters",
    });
  }

  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "suggestions.placePrediction.placeId,suggestions.placePrediction.types,suggestions.placePrediction.text.text,suggestions.placePrediction.structuredFormat.mainText.text,suggestions.placePrediction.structuredFormat.secondaryText.text",
        },
        body: JSON.stringify({
          input: trimmedInput,
          includedRegionCodes: ["in"],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const message =
        data?.error?.message || "Failed to fetch address suggestions";
      return res.status(response.status).json({ error: message });
    }

    const suggestions: AddressSuggestion[] =
      data.suggestions
        ?.map(
          (item: {
            placePrediction?: {
              placeId?: string;
              types?: string[];
              text?: { text?: string };
              structuredFormat?: {
                mainText?: { text?: string };
                secondaryText?: { text?: string };
              };
            };
          }) => {
            const prediction = item.placePrediction;
            if (!prediction?.structuredFormat?.mainText?.text) return null;

            return {
              placeId: prediction.placeId ?? "",
              mainText: prediction.structuredFormat?.mainText?.text ?? "",
              secondaryText:
              prediction.structuredFormat?.secondaryText?.text ?? "",
              address: prediction.text?.text ?? "",
              placeTypes: prediction.types ?? [],
          };
        })
        .filter(Boolean) ?? [];

    return res.status(200).json({ suggestions });
  } catch {
    return res.status(500).json({
      error: "Unable to reach Google Places API. Please try again.",
    });
  }
}
