"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Info, MapPin, Loader2, Navigation } from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";
import { JourneyPriceBreakdown } from "@/components/JourneyPriceBreakdown";
import type { VehicleType } from "@/lib/pricing-config";
import type { JourneyPricingResult } from "@/types/pricing";

const features = [
  "Verified Care Companion",
  "Live Journey Tracking",
  "Help with Luggage & Stairs",
  "Till Home Safety Promise",
  "Real-time Updates to Family",
  "24/7 Emergency Support",
];

const vehicleOptions: { type: VehicleType; label: string; description: string }[] = [
  { type: "car", label: "Car", description: "Comfortable car for longer journeys" },
  { type: "auto", label: "Auto", description: "Auto-rickshaw for shorter city trips" },
];

export default function PricingModel() {
  const [originAddress, setOriginAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [originPlaceTypes, setOriginPlaceTypes] = useState<string[]>([]);
  const [destinationPlaceTypes, setDestinationPlaceTypes] = useState<string[]>([]);
  const [vehicleType, setVehicleType] = useState<VehicleType>("car");
  const [pricing, setPricing] = useState<JourneyPricingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isLoadingOrigin, setIsLoadingOrigin] = useState(false);
  const [distanceError, setDistanceError] = useState("");

  const getCurrentAddress = async () => {
    setIsLoadingOrigin(true);
    setDistanceError("");

    if (!navigator.geolocation) {
      setDistanceError("Geolocation is not supported by your browser");
      setIsLoadingOrigin(false);
      return;
    }

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      const { latitude, longitude } = position.coords;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
        {
          headers: {
            "User-Agent": "Care2Home/1.0",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }

      const data = await response.json();
      const address =
        data.display_name ||
        `${data.address?.road || ""} ${data.address?.house_number || ""}, ${data.address?.suburb || data.address?.neighbourhood || ""}, ${data.address?.city || data.address?.town || ""}, ${data.address?.state || ""} ${data.address?.postcode || ""}`.trim();

      if (address) {
        setOriginAddress(address);
        setOriginPlaceTypes([]);
      } else {
        setDistanceError("Could not determine address from location");
      }
    } catch (err: unknown) {
      const geoError = err as { code?: number; message?: string };
      if (geoError.code === 1) {
        setDistanceError("Location access denied. Please enable location permissions.");
      } else if (geoError.code === 2) {
        setDistanceError("Location unavailable. Please try again.");
      } else if (geoError.code === 3) {
        setDistanceError("Location request timed out. Please try again.");
      } else {
        setDistanceError(geoError.message || "Failed to get current address.");
      }
    } finally {
      setIsLoadingOrigin(false);
    }
  };

  const calculateJourneyPrice = async () => {
    setDistanceError("");
    setPricing(null);

    if (!originAddress.trim()) {
      setDistanceError("Please enter a pickup address");
      return;
    }
    if (!destinationAddress.trim()) {
      setDistanceError("Please enter a destination address");
      return;
    }

    setIsCalculating(true);

    try {
      const response = await fetch("/api/calculate-journey-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originAddress: originAddress.trim(),
          destinationAddress: destinationAddress.trim(),
          vehicleType,
          originPlaceTypes,
          destinationPlaceTypes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to calculate journey price");
      }

      setPricing(data as JourneyPricingResult);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to calculate journey price";
      setDistanceError(message);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p className="text-center text-gray-700 text-lg font-medium mb-2">
          Most families book us when they can&apos;t leave office or live in another
          city — and don&apos;t want to take risks with their parents.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-2xl mx-auto">
          Enter your pickup and destination to see your journey price and exactly
          what&apos;s included.
        </p>

        <Card className="max-w-3xl mx-auto mb-8 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-5 justify-center">
              <Navigation className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Calculate Your Journey Price
              </h3>
            </div>

            <div className="space-y-4">
              <AddressAutocomplete
                label="Pickup Address (Origin)"
                address={originAddress}
                onAddressChange={(address) => {
                  setOriginAddress(address);
                  setOriginPlaceTypes([]);
                }}
                onAddressSelect={(suggestion) => {
                  setOriginPlaceTypes(suggestion.placeTypes ?? []);
                }}
                addressPlaceholder="e.g. IGI Airport Terminal 3, New Delhi"
                headerAction={
                  <button
                    type="button"
                    onClick={getCurrentAddress}
                    disabled={isLoadingOrigin}
                    className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    {isLoadingOrigin ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Getting location...</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-4 h-4" />
                        <span>Use Current Location</span>
                      </>
                    )}
                  </button>
                }
              />

              <AddressAutocomplete
                label="Destination Address (Home)"
                address={destinationAddress}
                onAddressChange={(address) => {
                  setDestinationAddress(address);
                  setDestinationPlaceTypes([]);
                }}
                onAddressSelect={(suggestion) => {
                  setDestinationPlaceTypes(suggestion.placeTypes ?? []);
                }}
                addressPlaceholder="e.g. Sector 62, Noida, Uttar Pradesh"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicleOptions.map((option) => (
                    <button
                      key={option.type}
                      type="button"
                      onClick={() => setVehicleType(option.type)}
                      className={`rounded-lg border p-4 text-left transition-colors ${
                        vehicleType === option.type
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 hover:border-blue-300"
                      }`}
                    >
                      <p className="font-semibold text-gray-900">{option.label}</p>
                      <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={calculateJourneyPrice}
                disabled={isCalculating}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Navigation className="w-5 h-5" />
                    Calculate Price
                  </>
                )}
              </button>

              {distanceError && (
                <p className="text-sm text-red-600 text-center">{distanceError}</p>
              )}

              {pricing && (
                <JourneyPriceBreakdown
                  pricing={pricing}
                  showCta
                  ctaHref={{
                    pathname: "/book-service",
                    query: {
                      distanceKm: pricing.distanceKm,
                      vehicleType: pricing.vehicleType,
                      transportationFee: pricing.transportationFee,
                      careCompanionFee: pricing.careCompanionFee,
                      totalPrice: pricing.totalPrice,
                      origin: originAddress,
                      destination: destinationAddress,
                      source: "pricing",
                    },
                  }}
                />
              )}
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-600 text-center mb-4">
          You&apos;re booking an assisted journey with a dedicated Care Companion — not
          just a vehicle. No hidden charges.
        </p>
      </div>

      <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-3 mb-6">
              <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What&apos;s Included in Every Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  Every Care2Home journey includes comprehensive care and safety
                  features, regardless of distance.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Transportation based on distance plus a fixed Care Companion service fee.
            No surge pricing, no hidden charges.
          </p>
        </div>
      </div>
    </div>
  );
}
