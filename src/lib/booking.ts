import {
  calculateJourneyPricing,
  formatDistanceKm,
  formatIndianCurrency,
  formatIndianCurrencyRange,
  getVehicleLabel,
} from "@/lib/pricing";
import {
  getCabTypeLabel,
  isValidCabType,
  type CabType,
  type VehicleType,
} from "@/lib/pricing-config";
import type {
  BookingContact,
  BookingJourney,
  BookingPricingSnapshot,
  BookingRecord,
  JourneyPricingResult,
} from "@/types/pricing";

export const WHATSAPP_NUMBER = "919910646415";
export const JOURNEY_PRICING_SESSION_KEY = "care2home:journey-pricing";
export const JOURNEY_PRICING_HANDOFF_KEY = "care2home:journey-pricing-handoff";

export type JourneyPricingHandoff = {
  distanceKm: number;
  vehicleType: VehicleType;
  cabType?: CabType;
  discountAmount: number;
  origin: string;
  destination: string;
};

export function saveJourneyPricingToSession(
  pricing: JourneyPricingResult
): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(JOURNEY_PRICING_SESSION_KEY, JSON.stringify(pricing));
  } catch {
    // Private mode / quota — ignore
  }
}

export function loadJourneyPricingFromSession(): JourneyPricingResult | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(JOURNEY_PRICING_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as JourneyPricingResult;
  } catch {
    return null;
  }
}

export function saveJourneyPricingHandoff(handoff: JourneyPricingHandoff): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(JOURNEY_PRICING_HANDOFF_KEY, JSON.stringify(handoff));
  } catch {
    // Private mode / quota — ignore
  }
}

export function loadJourneyPricingHandoff(): JourneyPricingHandoff | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(JOURNEY_PRICING_HANDOFF_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<JourneyPricingHandoff>;
    if (
      typeof parsed.distanceKm !== "number" ||
      parsed.distanceKm <= 0 ||
      !isValidVehicleType(parsed.vehicleType) ||
      (parsed.vehicleType === "car" && !isValidCabType(parsed.cabType)) ||
      typeof parsed.origin !== "string" ||
      !parsed.origin.trim() ||
      typeof parsed.destination !== "string" ||
      !parsed.destination.trim()
    ) {
      return null;
    }

    return {
      distanceKm: parsed.distanceKm,
      vehicleType: parsed.vehicleType,
      ...(isValidCabType(parsed.cabType) ? { cabType: parsed.cabType } : {}),
      discountAmount:
        typeof parsed.discountAmount === "number" && parsed.discountAmount > 0
          ? parsed.discountAmount
          : 0,
      origin: parsed.origin.trim(),
      destination: parsed.destination.trim(),
    };
  } catch {
    return null;
  }
}

export function resolveJourneyPricingFromHandoff(
  handoff: JourneyPricingHandoff
): JourneyPricingResult | null {
  const pricing = calculateJourneyPricing({
    distanceKm: handoff.distanceKm,
    vehicleType: handoff.vehicleType,
    ...(handoff.cabType ? { cabType: handoff.cabType } : {}),
    originAddress: handoff.origin,
    destinationAddress: handoff.destination,
  });

  if (!pricing) return null;

  if (handoff.discountAmount > 0) {
    return pricing;
  }

  return {
    ...pricing,
    discountAmount: 0,
    discountedTotalPriceRange: pricing.totalPriceRange,
  };
}

function isValidVehicleType(value: unknown): value is VehicleType {
  return value === "car" || value === "auto";
}

/** Firestore doc id from phone — digits only (e.g. +91 99106 46415 → 919910646415) */
export function toFirestoreBookingDocId(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits || phone.trim();
}

export function toBookingPricingSnapshot(
  pricing: JourneyPricingResult
): BookingPricingSnapshot {
  return {
    distanceKm: pricing.distanceKm,
    vehicleType: pricing.vehicleType,
    ...(pricing.cabType ? { cabType: pricing.cabType } : {}),
    discountAmount: pricing.discountAmount,
    discountedTotalPriceRange: pricing.discountedTotalPriceRange,
    totalPriceRange: pricing.totalPriceRange,
    transportationFeeRange: pricing.transportationFeeRange,
    careCompanionFeeRange: pricing.careCompanionFeeRange,
    careCompanionTravelChargeRange: pricing.careCompanionTravelChargeRange,
    railwaySurchargeRange: pricing.railwaySurchargeRange,
    originLocationType: pricing.originLocationType,
    destinationLocationType: pricing.destinationLocationType,
    transportationFee: pricing.transportationFee,
    careCompanionFee: pricing.careCompanionFee,
    careCompanionTravelCharge: pricing.careCompanionTravelCharge,
    railwaySurcharge: pricing.railwaySurcharge,
    totalPrice: pricing.totalPrice,
  };
}

export function buildWhatsAppMessage(
  contact: BookingContact,
  ticketImageUrl: string | null,
  pricing: BookingPricingSnapshot | null,
  journey?: BookingJourney | null
): string {
  const vehicleLine = pricing
    ? pricing.vehicleType === "car"
      ? pricing.cabType
        ? `Car — ${getCabTypeLabel(pricing.cabType)}`
        : "Car"
      : "Auto"
    : "";

  const pricingSection = pricing
    ? `
💰 *Journey Price:* ${formatIndianCurrencyRange(pricing.discountedTotalPriceRange.min, pricing.discountedTotalPriceRange.max)} (${formatIndianCurrency(pricing.discountAmount)} first-time discount applied)
   Estimated before discount: ${formatIndianCurrencyRange(pricing.totalPriceRange.min, pricing.totalPriceRange.max)}
   ${getVehicleLabel(pricing.vehicleType, pricing.cabType)}: ${formatIndianCurrencyRange(pricing.transportationFeeRange.min, pricing.transportationFeeRange.max)}
   Care Companion: ${formatIndianCurrencyRange(pricing.careCompanionFeeRange.min, pricing.careCompanionFeeRange.max)}
   Care Companion Travel: ${formatIndianCurrencyRange(pricing.careCompanionTravelChargeRange.min, pricing.careCompanionTravelChargeRange.max)}
📏 *Distance:* ${formatDistanceKm(pricing.distanceKm)} km
🚗 *Vehicle:* ${vehicleLine}
`
    : "";

  const luggageLine =
    journey && typeof journey.luggageCount === "number"
      ? `\n🧳 *Luggage:* ${journey.luggageCount}`
      : "";

  return `
🟢 *New Care2Home Booking Request*

📋 *Booking Details:*
${pricingSection}${luggageLine}
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
    pricingSnapshot,
    journey
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
