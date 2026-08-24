"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/Cardnew";
import {
  Car,
  CarFront,
  CheckCircle,
  Info,
  MapPin,
  Loader2,
  Navigation,
  Sparkles,
  Shield,
} from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";
import { JourneyPriceBreakdown } from "@/components/JourneyPriceBreakdown";
import { firstTimeUserDiscountPercent } from "@/lib/pricing-config";
import { saveJourneyPricingToSession } from "@/lib/booking";
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

const vehicleOptions: {
  type: VehicleType;
  label: string;
  description: string;
  icon: typeof Car;
}[] = [
  {
    type: "car",
    label: "Car",
    description: "Comfortable car for longer journeys",
    icon: Car,
  },
  {
    type: "auto",
    label: "Auto",
    description: "Auto-rickshaw for shorter city trips",
    icon: CarFront,
  },
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-5 py-2 rounded-full mb-5 transform -rotate-1 shadow-lg">
            <span className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {firstTimeUserDiscountPercent}% OFF — First Booking
            </span>
          </div>

          <p className="text-gray-700 text-lg font-medium mb-3 max-w-2xl mx-auto">
            Most families book us when they can&apos;t leave office or live in another
            city — and don&apos;t want to take risks with their parents.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple,{" "}
            <span className="text-blue-700">Transparent</span> Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enter your pickup and destination to see your journey price — with{" "}
            <span className="font-semibold text-green-700">
              {firstTimeUserDiscountPercent}% off
            </span>{" "}
            for first-time users.
          </p>
        </div>

        {/* Calculator Form */}
        <Card className="max-w-3xl mx-auto mb-8 rounded-2xl shadow-xl border-0 border-t-4 border-t-blue-600 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-5">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold">
                  Calculate Your Journey Price
                </h2>
                <p className="text-blue-100 text-sm">
                  Distance-based pricing with no hidden charges
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-6 md:p-8">
            <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 mb-6 flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <span className="font-semibold">Special offer:</span> Get{" "}
                <span className="font-bold text-blue-700">
                  {firstTimeUserDiscountPercent}% discount
                </span>{" "}
                on your first booking. Safe travel for your parents, peace of mind
                for you.
              </p>
            </div>

            <div className="space-y-6">
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
                      className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
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
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Vehicle Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicleOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = vehicleType === option.type;

                    return (
                      <button
                        key={option.type}
                        type="button"
                        onClick={() => setVehicleType(option.type)}
                        className={`rounded-xl border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-100"
                            : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-600 mt-0.5">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={calculateJourneyPrice}
                disabled={isCalculating}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl text-lg font-bold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
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
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3">
                  <p className="text-sm text-red-700 text-center">{distanceError}</p>
                </div>
              )}

              {pricing && (
                <JourneyPriceBreakdown
                  pricing={pricing}
                  showCta
                  onCtaClick={() => saveJourneyPricingToSession(pricing)}
                  ctaHref={{
                    pathname: "/book-service",
                    query: {
                      distanceKm: pricing.distanceKm,
                      vehicleType: pricing.vehicleType,
                      discountPercent: pricing.discountPercent,
                      originLocationType: pricing.originLocationType,
                      destinationLocationType: pricing.destinationLocationType,
                      transportationFee: pricing.transportationFee,
                      careCompanionFee: pricing.careCompanionFee,
                      totalPrice: pricing.totalPrice,
                      transportationFeeMin: pricing.transportationFeeRange.min,
                      transportationFeeMax: pricing.transportationFeeRange.max,
                      careCompanionFeeMin: pricing.careCompanionFeeRange.min,
                      careCompanionFeeMax: pricing.careCompanionFeeRange.max,
                      totalPriceMin: pricing.totalPriceRange.min,
                      totalPriceMax: pricing.totalPriceRange.max,
                      discountedTotalMin: pricing.discountedTotalPriceRange.min,
                      discountedTotalMax: pricing.discountedTotalPriceRange.max,
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

        <p className="text-sm text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          You&apos;re booking an assisted journey with a dedicated Care Companion — not
          just a vehicle. No surge pricing, no hidden charges.
        </p>

        {/* What's Included */}
        <Card className="rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100">
          <CardContent className="p-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-white" />
              </div>
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
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/70 rounded-lg px-4 py-3 border border-white"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Transportation based on distance plus a fixed Care Companion service fee.
            No surge pricing, no hidden charges.
          </p>
        </div>
      </div>
    </div>
  );
}
