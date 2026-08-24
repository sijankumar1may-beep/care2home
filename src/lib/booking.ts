import {
  formatDistanceKm,
  formatIndianCurrencyRange,
  getVehicleLabel,
} from "@/lib/pricing";
import type { VehicleType } from "@/lib/pricing-config";
import type {
  BookingContact,
  BookingJourney,
  BookingPricingSnapshot,
  BookingRecord,
  JourneyPricingResult,
  LocationCategory,
} from "@/types/pricing";

export const WHATSAPP_NUMBER = "919910646415";
export const JOURNEY_PRICING_SESSION_KEY = "care2home:journey-pricing";

export function saveJourneyPricingToSession(
  pricing: JourneyPricingResult
): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(JOURNEY_PRICING_SESSION_KEY, JSON.stringify(pricing));
}

export function loadJourneyPricingFromSession(): JourneyPricingResult | null {
  if (typeof window === "undefined") return null;

  const raw = sessionStorage.getItem(JOURNEY_PRICING_SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as JourneyPricingResult;
  } catch {
    return null;
  }
}

function getQueryString(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function getQueryNumber(value: string | string[] | undefined): number | null {
  const parsed = Number(getQueryString(value));
  return Number.isFinite(parsed) ? parsed : null;
}

function isValidVehicleType(value: string): value is VehicleType {
  return value === "car" || value === "auto";
}

function isValidLocationCategory(value: string): value is LocationCategory {
  return (
    value === "airport" ||
    value === "railway" ||
    value === "home" ||
    value === "other"
  );
}

/** Firestore doc id from phone — digits only (e.g. +91 99106 46415 → 919910646415) */
export function toFirestoreBookingDocId(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits || phone.trim();
}

/** Rebuild pricing from URL query so saved/WhatsApp price matches the pricing page */
export function parseJourneyPricingFromQuery(
  query: Record<string, string | string[] | undefined>
): JourneyPricingResult | null {
  if (getQueryString(query.source) !== "pricing") return null;

  const distanceKm = getQueryNumber(query.distanceKm);
  const vehicleType = getQueryString(query.vehicleType);
  const transportationFeeMin = getQueryNumber(query.transportationFeeMin);
  const transportationFeeMax = getQueryNumber(query.transportationFeeMax);
  const careCompanionFeeMin = getQueryNumber(query.careCompanionFeeMin);
  const careCompanionFeeMax = getQueryNumber(query.careCompanionFeeMax);
  const totalPriceMin = getQueryNumber(query.totalPriceMin);
  const totalPriceMax = getQueryNumber(query.totalPriceMax);
  const discountedTotalMin = getQueryNumber(query.discountedTotalMin);
  const discountedTotalMax = getQueryNumber(query.discountedTotalMax);
  const discountPercent =
    getQueryNumber(query.discountPercent) ??
    getQueryNumber(query.discount) ??
    10;
  const transportationFee =
    getQueryNumber(query.transportationFee) ?? transportationFeeMin;
  const careCompanionFee =
    getQueryNumber(query.careCompanionFee) ?? careCompanionFeeMin;
  const totalPrice = getQueryNumber(query.totalPrice) ?? totalPriceMin;

  const rawOriginLocationType = getQueryString(query.originLocationType);
  const rawDestinationLocationType = getQueryString(
    query.destinationLocationType
  );
  const originLocationType = isValidLocationCategory(rawOriginLocationType)
    ? rawOriginLocationType
    : "other";
  const destinationLocationType = isValidLocationCategory(
    rawDestinationLocationType
  )
    ? rawDestinationLocationType
    : "other";

  if (
    distanceKm === null ||
    !isValidVehicleType(vehicleType) ||
    transportationFeeMin === null ||
    transportationFeeMax === null ||
    careCompanionFeeMin === null ||
    careCompanionFeeMax === null ||
    totalPriceMin === null ||
    totalPriceMax === null ||
    discountedTotalMin === null ||
    discountedTotalMax === null ||
    transportationFee === null ||
    careCompanionFee === null ||
    totalPrice === null
  ) {
    return null;
  }

  return {
    distanceKm,
    vehicleType,
    originLocationType,
    destinationLocationType,
    transportation: {
      vehicleType,
      baseFare: 0,
      distanceRate: 0,
      distanceCharge: 0,
      airportSurcharge: 0,
      total: transportationFee,
    },
    careCompanion: { fee: careCompanionFee },
    transportationFee,
    careCompanionFee,
    totalPrice,
    transportationFeeRange: {
      min: transportationFeeMin,
      max: transportationFeeMax,
    },
    careCompanionFeeRange: {
      min: careCompanionFeeMin,
      max: careCompanionFeeMax,
    },
    totalPriceRange: { min: totalPriceMin, max: totalPriceMax },
    discountPercent,
    discountedTotalPriceRange: {
      min: discountedTotalMin,
      max: discountedTotalMax,
    },
  };
}

export function toBookingPricingSnapshot(
  pricing: JourneyPricingResult
): BookingPricingSnapshot {
  return {
    distanceKm: pricing.distanceKm,
    vehicleType: pricing.vehicleType,
    discountPercent: pricing.discountPercent,
    discountedTotalPriceRange: pricing.discountedTotalPriceRange,
    totalPriceRange: pricing.totalPriceRange,
    transportationFeeRange: pricing.transportationFeeRange,
    careCompanionFeeRange: pricing.careCompanionFeeRange,
    originLocationType: pricing.originLocationType,
    destinationLocationType: pricing.destinationLocationType,
    transportationFee: pricing.transportationFee,
    careCompanionFee: pricing.careCompanionFee,
    totalPrice: pricing.totalPrice,
  };
}

export function buildWhatsAppMessage(
  contact: BookingContact,
  ticketImageUrl: string | null,
  pricing: BookingPricingSnapshot | null
): string {
  const pricingSection = pricing
    ? `
💰 *Journey Price:* ${formatIndianCurrencyRange(pricing.discountedTotalPriceRange.min, pricing.discountedTotalPriceRange.max)} (${pricing.discountPercent}% first-time discount applied)
   Estimated before discount: ${formatIndianCurrencyRange(pricing.totalPriceRange.min, pricing.totalPriceRange.max)}
   ${getVehicleLabel(pricing.vehicleType)}: ${formatIndianCurrencyRange(pricing.transportationFeeRange.min, pricing.transportationFeeRange.max)}
   Care Companion: ${formatIndianCurrencyRange(pricing.careCompanionFeeRange.min, pricing.careCompanionFeeRange.max)}
📏 *Distance:* ${formatDistanceKm(pricing.distanceKm)} km
🚗 *Vehicle:* ${pricing.vehicleType === "car" ? "Car" : "Auto"}
`
    : "";

  return `
🟢 *New Care2Home Booking Request*

📋 *Booking Details:*
${pricingSection}
📸 *Ticket Image:* ${ticketImageUrl || "Not provided"}

📍 *Pickup/Drop Address:*
${contact.address}

📞 *Phone Number:* ${contact.phone}

📧 *Email:* ${contact.email || "Not provided"}

---
*Thank you for choosing Care2Home!*
  `.trim();
}

export function buildBookingRecord({
  contact,
  ticketImageUrl,
  pricing,
  journey,
}: {
  contact: BookingContact;
  ticketImageUrl: string | null;
  pricing: JourneyPricingResult | null;
  journey: BookingJourney;
}): BookingRecord {
  const pricingSnapshot = pricing ? toBookingPricingSnapshot(pricing) : null;
  const whatsappMessage = buildWhatsAppMessage(
    contact,
    ticketImageUrl,
    pricingSnapshot
  );

  return {
    contact,
    ticketImageUrl,
    pricing: pricingSnapshot,
    journey,
    whatsappMessage,
    status: "pending",
    platform: "web",
  };
}

export function getWhatsAppUrl(message: string, phone = WHATSAPP_NUMBER): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}

/** Opens WhatsApp — uses same-tab navigation on iOS where window.open is blocked after async work */
export function openWhatsApp(message: string, phone = WHATSAPP_NUMBER): void {
  const url = getWhatsAppUrl(message, phone);
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    window.location.assign(url);
    return;
  }

  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.assign(url);
  }
}
