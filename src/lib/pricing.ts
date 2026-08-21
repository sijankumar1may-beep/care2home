import { pricingConfig, type VehicleType } from "@/lib/pricing-config";
import {
  detectLocationCategory,
  shouldApplyAirportSurcharge,
} from "@/lib/location-types";
import type {
  JourneyPricingResult,
  LocationCategory,
} from "@/types/pricing";

export const CARE_COMPANION_INCLUDED_SERVICES = [
  "Luggage assistance",
  "Journey guidance",
  "Platform assistance",
  "Coach/seat assistance",
  "Assistance until your parent is comfortably settled",
  "Journey coordination/status updates",
] as const;

export function formatIndianCurrency(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) {
    return "₹0";
  }

  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function formatDistanceKm(distanceKm: number): string {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
    return "0";
  }

  const rounded = Math.round(distanceKm * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function sanitizeAmount(value: number): number {
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }

  return Math.round(value);
}

type CalculateJourneyPricingInput = {
  distanceKm: number;
  vehicleType: VehicleType;
  originAddress: string;
  destinationAddress: string;
  originPlaceTypes?: string[];
  destinationPlaceTypes?: string[];
  originLocationType?: LocationCategory;
  destinationLocationType?: LocationCategory;
};

export function calculateJourneyPricing(
  input: CalculateJourneyPricingInput,
): JourneyPricingResult | null {
  const { distanceKm, vehicleType } = input;

  if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
    return null;
  }

  const vehicleConfig = pricingConfig[vehicleType];
  if (!vehicleConfig) {
    return null;
  }

  const originLocationType =
    input.originLocationType ??
    detectLocationCategory(input.originAddress, input.originPlaceTypes ?? []);

  const destinationLocationType =
    input.destinationLocationType ??
    detectLocationCategory(
      input.destinationAddress,
      input.destinationPlaceTypes ?? [],
    );

  const distanceCharge = distanceKm * vehicleConfig.perKmRate;

  const airportSurcharge = shouldApplyAirportSurcharge(
    originLocationType,
    destinationLocationType,
    pricingConfig.airportSurchargeRules,
  )
    ? pricingConfig.airportSurcharge
    : 0;

  const rawTransportationTotal =
    vehicleConfig.baseFare + distanceCharge + airportSurcharge;

  const minimumFare = vehicleConfig.minimumFare;
  const transportationTotal =
    minimumFare > 0
      ? Math.max(sanitizeAmount(rawTransportationTotal), minimumFare)
      : sanitizeAmount(rawTransportationTotal);

  const careCompanionFee = sanitizeAmount(pricingConfig.careCompanionFee);
  const totalPrice = transportationTotal + careCompanionFee;

  return {
    distanceKm,
    vehicleType,
    originLocationType,
    destinationLocationType,
    transportation: {
      vehicleType,
      baseFare: vehicleConfig.baseFare,
      distanceRate: vehicleConfig.perKmRate,
      distanceCharge,
      airportSurcharge,
      total: transportationTotal,
    },
    careCompanion: {
      fee: careCompanionFee,
    },
    transportationFee: transportationTotal,
    careCompanionFee,
    totalPrice,
  };
}

export function getVehicleLabel(vehicleType: VehicleType): string {
  return pricingConfig[vehicleType]?.label ?? "Transportation";
}
