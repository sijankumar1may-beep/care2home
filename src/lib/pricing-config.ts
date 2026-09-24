export type VehicleType = "car" | "auto";

export type CabType = "5_seater" | "7_seater" | "11_seater";

export const CAB_TYPES: CabType[] = ["5_seater", "7_seater", "11_seater"];

export const DEFAULT_CAB_TYPE: CabType = "5_seater";

export type VehiclePricingConfig = {
  baseFare: number;
  perKmRate: number;
  minimumFare: number;
  label: string;
};

export type AirportSurchargeRules = {
  applyWhenOriginIsAirport: boolean;
  applyWhenDestinationIsAirport: boolean;
};

export type RailwaySurchargeRules = {
  applyWhenOriginIsRailway: boolean;
  applyWhenDestinationIsRailway: boolean;
};

export type PricingConfig = {
  car: Record<CabType, VehiclePricingConfig>;
  auto: VehiclePricingConfig;
  careCompanionFee: number;
  careCompanionTravelCharge: number;
  airportSurcharge: number;
  airportSurchargeRules: AirportSurchargeRules;
  railwaySurcharge: number;
  railwaySurchargeRules: RailwaySurchargeRules;
};

/** First-time user flat discount (₹) — matches DiscountPopup offer */
export const firstTimeUserDiscountAmount = 100;

const cabTypeLabels: Record<CabType, string> = {
  "5_seater": "5 Seater",
  "7_seater": "7 Seater",
  "11_seater": "11 Seater",
};

export function isValidCabType(value: unknown): value is CabType {
  return value === "5_seater" || value === "7_seater" || value === "11_seater";
}

export function getCabTypeLabel(cabType: CabType): string {
  return cabTypeLabels[cabType];
}

/**
 * Base pricing configuration (lower bound shown to customers).
 * Update values here — do not hardcode prices in UI components.
 *
 * 5 seater = previous flat Car rates; 7/11 seater scaled by seat ratio (1.4x / 2.2x).
 */
export const pricingConfig: PricingConfig = {
  car: {
    "5_seater": {
      baseFare: 260,
      perKmRate: 20,
      minimumFare: 0,
      label: "Car Service",
    },
    "7_seater": {
      baseFare: 364,
      perKmRate: 28,
      minimumFare: 0,
      label: "Car Service",
    },
    "11_seater": {
      baseFare: 572,
      perKmRate: 44,
      minimumFare: 0,
      label: "Car Service",
    },
  },
  auto: {
    baseFare: 130,
    perKmRate: 15,
    minimumFare: 0,
    label: "Auto Service",
  },
  careCompanionFee: 400,
  careCompanionTravelCharge: 80,
  airportSurcharge: 200,
  airportSurchargeRules: {
    applyWhenOriginIsAirport: true,
    applyWhenDestinationIsAirport: true,
  },
  railwaySurcharge: 100,
  railwaySurchargeRules: {
    applyWhenOriginIsRailway: true,
    applyWhenDestinationIsRailway: true,
  },
};

/**
 * Upper-bound pricing configuration for displayed price ranges.
 * Keeps a profit buffer while base rates remain in pricingConfig.
 */
export const pricingRangeConfig: PricingConfig = {
  car: {
    "5_seater": {
      baseFare: 320,
      perKmRate: 25,
      minimumFare: 0,
      label: "Car Service",
    },
    "7_seater": {
      baseFare: 448,
      perKmRate: 35,
      minimumFare: 0,
      label: "Car Service",
    },
    "11_seater": {
      baseFare: 704,
      perKmRate: 55,
      minimumFare: 0,
      label: "Car Service",
    },
  },
  auto: {
    baseFare: 170,
    perKmRate: 17,
    minimumFare: 0,
    label: "Auto Service",
  },
  careCompanionFee: 480,
  careCompanionTravelCharge: 130,
  airportSurcharge: 250,
  airportSurchargeRules: {
    applyWhenOriginIsAirport: true,
    applyWhenDestinationIsAirport: true,
  },
  railwaySurcharge: 100,
  railwaySurchargeRules: {
    applyWhenOriginIsRailway: true,
    applyWhenDestinationIsRailway: true,
  },
};
