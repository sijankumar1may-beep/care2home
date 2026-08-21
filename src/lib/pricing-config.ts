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

/**
 * Central pricing configuration.
 * Update values here — do not hardcode prices in UI components.
 */
export const pricingConfig: PricingConfig = {
  car: {
    baseFare: 250,
    perKmRate: 15,
    minimumFare: 0,
    label: "Car Service",
  },
  auto: {
    baseFare: 120,
    perKmRate: 12,
    minimumFare: 0,
    label: "Auto Service",
  },
  careCompanionFee: 300,
  airportSurcharge: 150,
  airportSurchargeRules: {
    applyWhenOriginIsAirport: true,
    applyWhenDestinationIsAirport: true,
  },
};
