"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import {
  Car,
  CarFront,
  CheckCircle,
  ChevronDown,
  Sparkles,
  Tag,
  User,
} from "lucide-react";
import {
  CARE_COMPANION_INCLUDED_SERVICES,
  formatDistanceKm,
  formatIndianCurrency,
  formatIndianCurrencyRange,
  getVehicleLabel,
} from "@/lib/pricing";
import { firstTimeUserDiscountAmount } from "@/lib/pricing-config";
import type { JourneyPricingResult } from "@/types/pricing";

type JourneyPriceBreakdownProps = {
  pricing: JourneyPricingResult;
  showCta?: boolean;
  initialDiscountApplied?: boolean;
  /** When false, hide Apply/Remove discount controls (e.g. book-service handoff). */
  showDiscountControls?: boolean;
  /** Book page path — defaults to /book-service with no query params. */
  bookHref?: string;
  onCtaClick?: (pricing: JourneyPricingResult) => void;
};

type AccordionSectionProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  accent?: "green" | "blue";
};

const CONFETTI_COLORS = [
  "#2563eb",
  "#16a34a",
  "#eab308",
  "#ef4444",
  "#a855f7",
  "#f97316",
  "#06b6d4",
];

type ConfettiPiece = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  color: string;
  drift: string;
  radius: string;
};

function CelebrationOverlay({
  message,
  onDone,
}: {
  message: string;
  onDone: () => void;
}) {
  const [pieces] = useState<ConfettiPiece[]>(() =>
    Array.from({ length: 48 }, (_, index) => {
      const drift = `${(Math.random() - 0.5) * 140}px`;
      return {
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.45}s`,
        duration: `${1.8 + Math.random() * 1.4}s`,
        size: `${6 + Math.random() * 8}px`,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        drift,
        radius: Math.random() > 0.5 ? "2px" : "9999px",
      };
    }),
  );

  useEffect(() => {
    const timer = window.setTimeout(onDone, 2400);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/30 animate-celebration-burst" />
      <div className="absolute left-1/2 top-[42%] z-10 w-[min(90vw,22rem)] -translate-x-1/2 -translate-y-1/2 animate-celebration-banner">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4 text-center text-white shadow-2xl ring-4 ring-white/40">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Woohoo!
          </p>
          <p className="mt-1 text-lg font-bold leading-snug sm:text-xl">
            {message}
          </p>
        </div>
      </div>

      {pieces.map((piece) => (
        <span
          key={piece.id}
          aria-hidden
          className="absolute top-0 animate-confetti-fall"
          style={
            {
              left: piece.left,
              width: piece.size,
              height: `${8 + (piece.id % 7)}px`,
              backgroundColor: piece.color,
              borderRadius: piece.radius,
              animationDelay: piece.delay,
              "--confetti-duration": piece.duration,
              "--confetti-x": piece.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function AccordionSection({
  id,
  title,
  isOpen,
  onToggle,
  children,
  accent = "blue",
}: AccordionSectionProps) {
  const accentStyles =
    accent === "green"
      ? {
          shell: isOpen
            ? "border-green-400 bg-white shadow-md ring-2 ring-green-100"
            : "border-green-300 bg-white hover:border-green-400 hover:shadow-md",
          tip: "text-green-700",
          chevron: "bg-green-600 text-white",
          divider: "border-green-200",
        }
      : {
          shell: isOpen
            ? "border-blue-400 bg-white shadow-md ring-2 ring-blue-100"
            : "border-blue-300 bg-white hover:border-blue-400 hover:shadow-md",
          tip: "text-blue-700",
          chevron: "bg-blue-600 text-white",
          divider: "border-blue-200",
        };

  return (
    <div
      className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ${accentStyles.shell}`}
    >
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left active:scale-[0.98] transition-transform duration-150"
      >
        <div className="min-w-0">
          <p className="text-base font-bold text-gray-900">{title}</p>
          <p
            className={`mt-0.5 text-xs font-semibold transition-colors duration-200 ${
              isOpen ? "text-gray-500" : accentStyles.tip
            }`}
          >
            {isOpen ? "Tap to hide details" : "Tap to view details"}
          </p>
        </div>
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 ease-out ${accentStyles.chevron} ${
            isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`px-4 pb-4 pt-1 border-t border-dashed transition-all duration-300 ${accentStyles.divider} ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function JourneyPriceBreakdown({
  pricing,
  showCta = false,
  initialDiscountApplied = false,
  showDiscountControls = true,
  bookHref = "/book-service",
  onCtaClick,
}: JourneyPriceBreakdownProps) {
  const [openRange, setOpenRange] = useState(false);
  const [openIncludes, setOpenIncludes] = useState(true);
  const [discountApplied, setDiscountApplied] = useState(initialDiscountApplied);
  const [pricePulseKey, setPricePulseKey] = useState(0);
  const [celebration, setCelebration] = useState<{
    message: string;
  } | null>(null);

  const entranceKey = `${pricing.distanceKm}-${pricing.vehicleType}-${pricing.cabType ?? "auto"}-${pricing.totalPrice}`;

  useEffect(() => {
    setDiscountApplied(initialDiscountApplied);
  }, [
    initialDiscountApplied,
    pricing.distanceKm,
    pricing.vehicleType,
    pricing.cabType,
    pricing.totalPrice,
    pricing.totalPriceRange.min,
    pricing.totalPriceRange.max,
  ]);

  const distanceLabel = formatDistanceKm(pricing.distanceKm);
  const vehicleLabel = getVehicleLabel(pricing.vehicleType, pricing.cabType);
  const VehicleIcon = pricing.vehicleType === "car" ? Car : CarFront;

  const displayTotalRange = discountApplied
    ? pricing.discountedTotalPriceRange
    : pricing.totalPriceRange;

  const offerAmount =
    pricing.discountAmount > 0
      ? pricing.discountAmount
      : firstTimeUserDiscountAmount;

  const canApplyDiscount =
    showDiscountControls && !discountApplied && offerAmount > 0;

  const showDiscountBanner = canApplyDiscount || discountApplied;

  const effectivePricing: JourneyPricingResult = discountApplied
    ? pricing
    : {
        ...pricing,
        discountAmount: 0,
        discountedTotalPriceRange: pricing.totalPriceRange,
      };

  const applyDiscount = () => {
    setDiscountApplied(true);
    setPricePulseKey((key) => key + 1);
    setCelebration({
      message: `${formatIndianCurrency(pricing.discountAmount)} discount unlocked!`,
    });
  };

  const removeDiscount = () => {
    setDiscountApplied(false);
    setPricePulseKey((key) => key + 1);
  };

  return (
    <>
      {celebration && (
        <CelebrationOverlay
          message={celebration.message}
          onDone={() => setCelebration(null)}
        />
      )}

      <div
        key={entranceKey}
        className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 md:p-8 text-left shadow-lg animate-scale-in"
      >
      <div
        className="text-center mb-6 animate-fade-in-up"
        style={{ animationDelay: "40ms" }}
      >
        {(showDiscountControls || discountApplied) && offerAmount > 0 && (
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1.5 rounded-full mb-4 shadow-md animate-sparkle-nudge">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-bold tracking-wide">
              {discountApplied
                ? `${formatIndianCurrency(offerAmount)} OFF applied — First-Time Users`
                : `${formatIndianCurrency(offerAmount)} OFF available — First-Time Users`}
            </span>
          </div>
        )}
        <h4 className="text-xl md:text-2xl font-bold text-gray-900">
          Your Journey Price
        </h4>
        <p className="text-green-800 font-medium mt-1">{distanceLabel} km journey</p>
      </div>

      <div className="space-y-4">
        <h5
          className="text-xs font-semibold text-gray-500 uppercase tracking-wider animate-fade-in-up"
          style={{ animationDelay: "80ms" }}
        >
          Price Breakdown
        </h5>

        <div className="rounded-xl bg-white/80 border border-gray-100 p-4 space-y-4">
          <div
            className="flex items-start justify-between gap-4 animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <VehicleIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{vehicleLabel}</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {distanceLabel} km journey fare
                </p>
              </div>
            </div>
            <p className="font-semibold text-gray-900 shrink-0">
              {formatIndianCurrencyRange(
                pricing.transportationFeeRange.min,
                pricing.transportationFeeRange.max,
              )}
            </p>
          </div>

          <div
            className="flex items-start justify-between gap-4 animate-fade-in-up"
            style={{ animationDelay: "180ms" }}
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Care Companion</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Dedicated assistance throughout the journey
                </p>
              </div>
            </div>
            <p className="font-semibold text-gray-900 shrink-0">
              {formatIndianCurrencyRange(
                pricing.careCompanionFeeRange.min,
                pricing.careCompanionFeeRange.max,
              )}
            </p>
          </div>

          <div
            className="flex items-start justify-between gap-4 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <Car className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Care Companion Travel Charge
                </p>
                <p className="text-sm text-gray-600 mt-0.5">
                  Companion commute to pickup / from drop
                </p>
              </div>
            </div>
            <p className="font-semibold text-gray-900 shrink-0">
              {formatIndianCurrencyRange(
                pricing.careCompanionTravelChargeRange.min,
                pricing.careCompanionTravelChargeRange.max,
              )}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl bg-white border border-green-200 p-5 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-sm font-medium text-gray-600">Estimated Total</p>
            <p
              className={`text-base font-semibold transition-all duration-300 ${
                discountApplied
                  ? "text-gray-400 line-through scale-95"
                  : "text-gray-900 scale-100"
              }`}
            >
              {formatIndianCurrencyRange(
                pricing.totalPriceRange.min,
                pricing.totalPriceRange.max,
              )}
            </p>
          </div>

          {showDiscountBanner && (
            <>
              {canApplyDiscount ? (
                <button
                  type="button"
                  onClick={applyDiscount}
                  className="w-full mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-green-400 bg-green-50 px-4 py-3 text-left hover:bg-green-100 hover:border-green-500 transition-all duration-200 active:scale-[0.98] animate-soft-pulse"
                >
                  <Tag className="w-5 h-5 text-green-700 shrink-0" />
                  <span className="text-sm font-bold text-green-800">
                    Apply {formatIndianCurrency(offerAmount)} first-time user
                    discount
                  </span>
                </button>
              ) : (
                <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-green-300 bg-green-50 px-4 py-3 animate-scale-in">
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 animate-check-pop" />
                    <p className="text-sm font-semibold text-green-800">
                      {formatIndianCurrency(offerAmount)} first-time user
                      discount applied
                    </p>
                  </div>
                  {showDiscountControls && (
                    <button
                      type="button"
                      onClick={removeDiscount}
                      className="text-xs font-semibold text-green-700 underline underline-offset-2 hover:text-green-900 shrink-0 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          <div className="flex items-center justify-between gap-4 border-t border-green-100 pt-4">
            <p className="text-lg font-bold text-gray-900">Your Price</p>
            <p
              key={pricePulseKey}
              className="text-3xl md:text-4xl font-bold text-green-700 animate-price-pop"
            >
              {formatIndianCurrencyRange(
                displayTotalRange.min,
                displayTotalRange.max,
              )}
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 space-y-2 transition-all duration-300">
            <p className="text-sm font-semibold text-gray-800">
              {discountApplied
                ? `First-time discount of ${formatIndianCurrency(offerAmount)} is included in your price.`
                : canApplyDiscount
                  ? `First-time users can save ${formatIndianCurrency(offerAmount)} — tap Apply above to use it.`
                  : "Your final fare will be confirmed on our call before any payment."}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Your final fare will fall within the range shown above. After you
              submit, our team will call you within 2 hours to confirm the exact
              amount before any payment.
            </p>
            <p className="text-xs font-medium text-blue-900">
              No payment is required now.
            </p>
          </div>
        </div>

        <div
          className="space-y-3 animate-fade-in-up"
          style={{ animationDelay: "360ms" }}
        >
          <AccordionSection
            id="care-includes"
            title="Care Companion includes"
            isOpen={openIncludes}
            onToggle={() => setOpenIncludes((open) => !open)}
            accent="green"
          >
            <ul className="space-y-2">
              {CARE_COMPANION_INCLUDED_SERVICES.map((service, index) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-sm text-gray-700 animate-fade-in-up"
                  style={{ animationDelay: `${80 + index * 50}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection
            id="price-range"
            title="Why you see a price range"
            isOpen={openRange}
            onToggle={() => setOpenRange((open) => !open)}
            accent="blue"
          >
            <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
              <li>
                Based on ~{distanceLabel} km route and {vehicleLabel.toLowerCase()}{" "}
                rates
              </li>
              <li>
                Accounts for day-of variations like traffic, tolls, and route
                changes
              </li>
              <li>
                Exact fare is confirmed on our call — you will not pay more than
                the upper limit shown above
              </li>
            </ul>
          </AccordionSection>
        </div>
      </div>

      {showCta && (
        <Link
          className="mt-6 inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:-translate-y-0.5 py-3.5 rounded-xl text-center font-bold transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.99] animate-fade-in-up"
          style={{ animationDelay: "420ms" }}
          href={bookHref}
          onClick={() => onCtaClick?.(effectivePricing)}
        >
          {discountApplied ? "Book Now & Save — " : "Book Now — "}
          {formatIndianCurrencyRange(
            displayTotalRange.min,
            displayTotalRange.max,
          )}
        </Link>
      )}
    </div>
    </>
  );
}
