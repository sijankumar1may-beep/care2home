import type { VehicleType } from "@/lib/pricing-config";
import type { CabType } from "@/lib/pricing-config";

export type LocationCategory = "airport" | "railway" | "home" | "other";

export type TransportationPricing = {
  vehicleType: VehicleType;
  baseFare: number;
  distanceRate: number;
  distanceCharge: number;
  airportSurcharge: number;
  railwaySurcharge: number;
  total: number;
};

export type CareCompanionPricing = {
  fee: number;
  travelCharge: number;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type JourneyPricingResult = {
  distanceKm: number;
  vehicleType: VehicleType;
  cabType?: CabType;
  originLocationType: LocationCategory;
  destinationLocationType: LocationCategory;
  transportation: TransportationPricing;
  careCompanion: CareCompanionPricing;
  transportationFee: number;
  careCompanionFee: number;
  careCompanionTravelCharge: number;
  railwaySurcharge: number;
  totalPrice: number;
  transportationFeeRange: PriceRange;
  careCompanionFeeRange: PriceRange;
  careCompanionTravelChargeRange: PriceRange;
  railwaySurchargeRange: PriceRange;
  totalPriceRange: PriceRange;
  discountAmount: number;
  discountedTotalPriceRange: PriceRange;
};

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type BookingContact = {
  address: string;
  phone: string;
  email: string | null;
};

export type BookingJourney = {
  origin: string | null;
  destination: string | null;
  source: string | null;
};

/** Snapshot of journey pricing stored with each booking */
export type BookingPricingSnapshot = {
  distanceKm: number;
  vehicleType: VehicleType;
  cabType?: CabType;
  discountAmount: number;
  discountedTotalPriceRange: PriceRange;
  totalPriceRange: PriceRange;
  transportationFeeRange: PriceRange;
  careCompanionFeeRange: PriceRange;
  careCompanionTravelChargeRange: PriceRange;
  railwaySurchargeRange: PriceRange;
  originLocationType: LocationCategory;
  destinationLocationType: LocationCategory;
  transportationFee: number;
  careCompanionFee: number;
  careCompanionTravelCharge: number;
  railwaySurcharge: number;
  totalPrice: number;
};

/** Full booking payload saved to Firestore and mirrored in the WhatsApp message */
export type BookingRecord = {
  contact: BookingContact;
  ticketImageUrl: string | null;
  pricing: BookingPricingSnapshot | null;
  journey: BookingJourney;
  whatsappMessage: string;
  status: BookingStatus;
  platform: "web";
};

export type Booking = BookingRecord & {
  id?: string;
};
