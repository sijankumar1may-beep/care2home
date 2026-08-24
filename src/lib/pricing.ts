import {
  firstTimeUserDiscountPercent,
  pricingConfig,
  pricingRangeConfig,
  type PricingConfig,
  type VehicleType,
} from "@/lib/pricing-config";
import type { PriceRange } from "@/types/pricing";
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

export function formatIndianCurrencyRange(min: number, max: number): string {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return "₹0";
  }

  const roundedMin = Math.round(min);
  const roundedMax = Math.round(max);

  if (roundedMin === roundedMax) {
    return formatIndianCurrency(roundedMin);
  }

  return `${formatIndianCurrency(roundedMin)} – ${formatIndianCurrency(roundedMax)}`;
}

export function applyFirstTimeDiscount(amount: number): number {
  if (!Number.isFinite(amount) || amount < 0) {
    return 0;
  }

  const multiplier = 1 - firstTimeUserDiscountPercent / 100;
  return sanitizeAmount(amount * multiplier);
}

export function applyFirstTimeDiscountToRange(range: PriceRange): PriceRange {
  return {
    min: applyFirstTimeDiscount(range.min),
    max: applyFirstTimeDiscount(range.max),
  };
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

function calculatePricingWithConfig(
  input: CalculateJourneyPricingInput,
  config: PricingConfig,
): Omit<
  JourneyPricingResult,
  | "transportationFeeRange"
  | "careCompanionFeeRange"
  | "totalPriceRange"
  | "discountPercent"
  | "discountedTotalPriceRange"
> | null {
  const { distanceKm, vehicleType } = input;

  if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
    return null;
  }

  const vehicleConfig = config[vehicleType];
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
    config.airportSurchargeRules,
    input.originAddress,
    input.destinationAddress,
  )
    ? config.airportSurcharge
    : 0;

  const rawTransportationTotal =
    vehicleConfig.baseFare + distanceCharge + airportSurcharge;

  const minimumFare = vehicleConfig.minimumFare;
  const transportationTotal =
    minimumFare > 0
      ? Math.max(sanitizeAmount(rawTransportationTotal), minimumFare)
      : sanitizeAmount(rawTransportationTotal);

  const careCompanionFee = sanitizeAmount(config.careCompanionFee);
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

export function calculateJourneyPricing(
  input: CalculateJourneyPricingInput,
  config: PricingConfig = pricingConfig,
  rangeConfig: PricingConfig = pricingRangeConfig,
): JourneyPricingResult | null {
  const basePricing = calculatePricingWithConfig(input, config);
  const maxPricing = calculatePricingWithConfig(input, rangeConfig);

  if (!basePricing || !maxPricing) {
    return null;
  }

  return {
    ...basePricing,
    transportationFeeRange: {
      min: basePricing.transportationFee,
      max: maxPricing.transportationFee,
    },
    careCompanionFeeRange: {
      min: basePricing.careCompanionFee,
      max: maxPricing.careCompanionFee,
    },
    totalPriceRange: {
      min: basePricing.totalPrice,
      max: maxPricing.totalPrice,
    },
    discountPercent: firstTimeUserDiscountPercent,
    discountedTotalPriceRange: applyFirstTimeDiscountToRange({
      min: basePricing.totalPrice,
      max: maxPricing.totalPrice,
    }),
  };
}

export function getVehicleLabel(vehicleType: VehicleType): string {
  return pricingConfig[vehicleType]?.label ?? "Transportation";
}
