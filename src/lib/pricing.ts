import {
  DEFAULT_CAB_TYPE,
  firstTimeUserDiscountAmount,
  getCabTypeLabel,
  pricingConfig,
  pricingRangeConfig,
  type CabType,
  type PricingConfig,
  type VehiclePricingConfig,
  type VehicleType,
} from "@/lib/pricing-config";
import type { PriceRange } from "@/types/pricing";
import {
  detectLocationCategory,
  shouldApplyAirportSurcharge,
  shouldApplyRailwaySurcharge,
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

  return sanitizeAmount(Math.max(0, amount - firstTimeUserDiscountAmount));
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
  cabType?: CabType;
  originAddress: string;
  destinationAddress: string;
  originPlaceTypes?: string[];
  destinationPlaceTypes?: string[];
  originLocationType?: LocationCategory;
  destinationLocationType?: LocationCategory;
};

function resolveVehicleConfig(
  config: PricingConfig,
  vehicleType: VehicleType,
  cabType?: CabType,
): VehiclePricingConfig | null {
  if (vehicleType === "auto") {
    return config.auto;
  }

  const resolvedCabType = cabType ?? DEFAULT_CAB_TYPE;
  return config.car[resolvedCabType] ?? null;
}

function calculatePricingWithConfig(
  input: CalculateJourneyPricingInput,
  config: PricingConfig,
): Omit<
  JourneyPricingResult,
  | "transportationFeeRange"
  | "careCompanionFeeRange"
  | "careCompanionTravelChargeRange"
  | "railwaySurchargeRange"
  | "totalPriceRange"
  | "discountAmount"
  | "discountedTotalPriceRange"
> | null {
  const { distanceKm, vehicleType } = input;

  if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
    return null;
  }

  const resolvedCabType =
    vehicleType === "car" ? (input.cabType ?? DEFAULT_CAB_TYPE) : undefined;

  const vehicleConfig = resolveVehicleConfig(config, vehicleType, resolvedCabType);
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

  const railwaySurcharge = shouldApplyRailwaySurcharge(
    originLocationType,
    destinationLocationType,
    config.railwaySurchargeRules,
    input.originAddress,
    input.destinationAddress,
  )
    ? config.railwaySurcharge
    : 0;

  const rawTransportationTotal =
    vehicleConfig.baseFare +
    distanceCharge +
    airportSurcharge +
    railwaySurcharge;

  const minimumFare = vehicleConfig.minimumFare;
  const transportationTotal =
    minimumFare > 0
      ? Math.max(sanitizeAmount(rawTransportationTotal), minimumFare)
      : sanitizeAmount(rawTransportationTotal);

  const careCompanionFee = sanitizeAmount(config.careCompanionFee);
  const careCompanionTravelCharge = sanitizeAmount(
    config.careCompanionTravelCharge,
  );
  const sanitizedRailwaySurcharge = sanitizeAmount(railwaySurcharge);
  const totalPrice =
    transportationTotal + careCompanionFee + careCompanionTravelCharge;

  return {
    distanceKm,
    vehicleType,
    ...(resolvedCabType ? { cabType: resolvedCabType } : {}),
    originLocationType,
    destinationLocationType,
    transportation: {
      vehicleType,
      baseFare: vehicleConfig.baseFare,
      distanceRate: vehicleConfig.perKmRate,
      distanceCharge,
      airportSurcharge,
      railwaySurcharge: sanitizedRailwaySurcharge,
      total: transportationTotal,
    },
    careCompanion: {
      fee: careCompanionFee,
      travelCharge: careCompanionTravelCharge,
    },
    transportationFee: transportationTotal,
    careCompanionFee,
    careCompanionTravelCharge,
    railwaySurcharge: sanitizedRailwaySurcharge,
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
    careCompanionTravelChargeRange: {
      min: basePricing.careCompanionTravelCharge,
      max: maxPricing.careCompanionTravelCharge,
    },
    railwaySurchargeRange: {
      min: basePricing.railwaySurcharge,
      max: maxPricing.railwaySurcharge,
    },
    totalPriceRange: {
      min: basePricing.totalPrice,
      max: maxPricing.totalPrice,
    },
    discountAmount: firstTimeUserDiscountAmount,
    discountedTotalPriceRange: applyFirstTimeDiscountToRange({
      min: basePricing.totalPrice,
      max: maxPricing.totalPrice,
    }),
  };
}

export function getVehicleLabel(
  vehicleType: VehicleType,
  cabType?: CabType,
): string {
  if (vehicleType === "car") {
    const baseLabel = pricingConfig.car[cabType ?? DEFAULT_CAB_TYPE]?.label ?? "Car Service";
    if (cabType) {
      return `${baseLabel} (${getCabTypeLabel(cabType)})`;
    }
    return baseLabel;
  }

  return pricingConfig.auto?.label ?? "Transportation";
}
