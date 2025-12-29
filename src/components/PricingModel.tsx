"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/Cardnew";
import { Button } from "@/components/Button";
import { Car, Badge, CheckCircle, Info } from "lucide-react";
import Link from "next/link";

// Distance-based pricing tiers
const pricingTiers = [
  {
    range: "0-10 km",
    distanceKm: "0-10",
    auto: 599,
    car: 899,
    description: "Perfect for short local journeys",
  },
  {
    range: "10-20 km",
    distanceKm: "10-20",
    auto: 899,
    car: 1299,
    description: "Ideal for nearby areas",
    popular: true,
  },
  {
    range: "20-30 km",
    distanceKm: "20-30",
    auto: 1199,
    car: 1699,
    description: "For longer city travels",
  },
  {
    range: "30-50 km",
    distanceKm: "30-50",
    auto: 1599,
    car: 2199,
    description: "Extended journeys across NCR",
  },
  {
    range: "50+ km",
    distanceKm: "50+",
    auto: null,
    car: 2499,
    description: "Long distance travel (Car only)",
  },
];

const features = [
  "Verified Care Companion",
  "Live Journey Tracking",
  "Help with Luggage & Stairs",
  "Till Home Safety Promise",
  "Real-time Updates to Family",
  "24/7 Emergency Support",
];

export default function PricingModel() {
  const [selectedVehicle, setSelectedVehicle] = useState<"auto" | "car">("car");

  return (
    <div className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p className="text-center text-gray-700 text-lg font-medium mb-2">
          Most families book us when they can’t leave office or live in another
          city — and don’t want to take risks with their parents.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose your distance range and vehicle type. No hidden charges,
          complete care guaranteed.
        </p>

        {/* Vehicle Type Toggle */}
        <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
          <button
            onClick={() => setSelectedVehicle("auto")}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all ${
              selectedVehicle === "auto"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Badge className="w-5 h-5" />
            Auto
          </button>
          <button
            onClick={() => setSelectedVehicle("car")}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all ${
              selectedVehicle === "car"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Car className="w-5 h-5" />
            Car
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {pricingTiers.map((tier, index) => {
          const price = selectedVehicle === "auto" ? tier.auto : tier.car;
          const isAvailable = price !== null;

          return (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all ${
                tier.popular
                  ? "border-2 border-blue-600 scale-105"
                  : "border border-gray-200"
              } ${!isAvailable ? "opacity-60" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {selectedVehicle === "auto" ? (
                      <Badge className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Car className="w-6 h-6 text-blue-600" />
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.range}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    {tier.description}
                  </p>

                  {isAvailable ? (
                    <>
                      <div className="mb-2">
                        <span className="text-5xl font-bold text-blue-600">
                          ₹{price}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">per journey</span>
                    </>
                  ) : (
                    <div className="py-4">
                      <span className="text-gray-500 font-semibold">
                        Not Available
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        Please select Car for this distance
                      </p>
                    </div>
                  )}
                </div>

                {isAvailable ? (
                  <Link
                    className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 w-full block p-3 rounded-2xl text-center"
                    href={{
                      pathname: "/book-service",
                      query: {
                        distance: tier.distanceKm,
                        vehicle: selectedVehicle,
                        price: price,
                        source: "pricing",
                      },
                    }}
                  >
                    Book Now
                  </Link>
                ) : (
                  <span>Not Available</span>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Section */}
      <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-3 mb-6">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What&apos;s Included in Every Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  Every Care2Home journey includes comprehensive care and safety
                  features, regardless of distance or vehicle type.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Prices are fixed for the distance range. No surge pricing, no hidden
            charges.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Note:</strong> Auto available for distances up to 30 km. For
            longer journeys, Car option is recommended for comfort and safety.
          </p>
        </div>
      </div>
    </div>
  );
}
