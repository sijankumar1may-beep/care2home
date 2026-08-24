export type VehicleType = "car" | "auto";

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

export type PricingConfig = {
  car: VehiclePricingConfig;
  auto: VehiclePricingConfig;
  careCompanionFee: number;
  airportSurcharge: number;
  airportSurchargeRules: AirportSurchargeRules;
};

/** First-time user discount — matches DiscountPopup offer */
export const firstTimeUserDiscountPercent = 10;

/**
 * Base pricing configuration (lower bound shown to customers).
 * Update values here — do not hardcode prices in UI components.
 */
export const pricingConfig: PricingConfig = {
  car: {
    baseFare: 260,
    perKmRate: 20,
    minimumFare: 0,
    label: "Car Service",
  },
  auto: {
    baseFare: 130,
    perKmRate: 15,
    minimumFare: 0,
    label: "Auto Service",
  },
  careCompanionFee: 400,
  airportSurcharge: 200,
  airportSurchargeRules: {
    applyWhenOriginIsAirport: true,
    applyWhenDestinationIsAirport: true,
  },
};

/**
 * Upper-bound pricing configuration for displayed price ranges.
 * Keeps a profit buffer while base rates remain in pricingConfig.
 */
export const pricingRangeConfig: PricingConfig = {
  car: {
    baseFare: 320,
    perKmRate: 25,
    minimumFare: 0,
    label: "Car Service",
  },
  auto: {
    baseFare: 170,
    perKmRate: 17,
    minimumFare: 0,
    label: "Auto Service",
  },
  careCompanionFee: 480,
  airportSurcharge: 250,
  airportSurchargeRules: {
    applyWhenOriginIsAirport: true,
    applyWhenDestinationIsAirport: true,
  },
};
