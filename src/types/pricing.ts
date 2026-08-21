import type { VehicleType } from "@/lib/pricing-config";

export type LocationCategory = "airport" | "railway" | "home" | "other";

export type TransportationPricing = {
  vehicleType: VehicleType;
  baseFare: number;
  distanceRate: number;
  distanceCharge: number;
  airportSurcharge: number;
  total: number;
};

export type CareCompanionPricing = {
  fee: number;
};

export type JourneyPricingResult = {
  distanceKm: number;
  vehicleType: VehicleType;
  originLocationType: LocationCategory;
  destinationLocationType: LocationCategory;
  transportation: TransportationPricing;
  careCompanion: CareCompanionPricing;
  transportationFee: number;
  careCompanionFee: number;
  totalPrice: number;
};
