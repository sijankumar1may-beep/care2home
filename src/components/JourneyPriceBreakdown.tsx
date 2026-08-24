import Link from "next/link";
import { Car, CarFront, CheckCircle, Sparkles, Tag, User } from "lucide-react";
import {
  CARE_COMPANION_INCLUDED_SERVICES,
  formatDistanceKm,
  formatIndianCurrencyRange,
  getVehicleLabel,
} from "@/lib/pricing";
import type { JourneyPricingResult } from "@/types/pricing";

type JourneyPriceBreakdownProps = {
  pricing: JourneyPricingResult;
  showCta?: boolean;
  ctaHref?: {
    pathname: string;
    query: Record<string, string | number>;
  };
  onCtaClick?: () => void;
};

export function JourneyPriceBreakdown({
  pricing,
  showCta = false,
  ctaHref,
  onCtaClick,
}: JourneyPriceBreakdownProps) {
  const distanceLabel = formatDistanceKm(pricing.distanceKm);
  const vehicleLabel = getVehicleLabel(pricing.vehicleType);
  const VehicleIcon = pricing.vehicleType === "car" ? Car : CarFront;
  const hasAirportLeg =
    pricing.originLocationType === "airport" ||
    pricing.destinationLocationType === "airport";
  const hasRailwayLeg =
    pricing.originLocationType === "railway" ||
    pricing.destinationLocationType === "railway";

  return (
    <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 md:p-8 text-left shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1.5 rounded-full mb-4 transform -rotate-1 shadow-md">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-bold tracking-wide">
            {pricing.discountPercent}% OFF — First-Time Users
          </span>
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-gray-900">
          Your Journey Price
        </h4>
        <p className="text-green-800 font-medium mt-1">{distanceLabel} km journey</p>
      </div>

      <div className="space-y-4">
        <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Price Breakdown
        </h5>

        <div className="rounded-xl bg-white/80 border border-gray-100 p-4 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <VehicleIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{vehicleLabel}</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {distanceLabel} km + applicable travel charges
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

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
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
        </div>

        <div className="rounded-xl bg-white border border-green-200 p-5">
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-sm font-medium text-gray-600">Estimated Total</p>
            <p className="text-base font-semibold text-gray-400 line-through">
              {formatIndianCurrencyRange(
                pricing.totalPriceRange.min,
                pricing.totalPriceRange.max,
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-green-600 shrink-0" />
            <p className="text-sm font-semibold text-green-700">
              {pricing.discountPercent}% first-time user discount applied
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-green-100 pt-4">
            <p className="text-lg font-bold text-gray-900">Your Price</p>
            <p className="text-3xl md:text-4xl font-bold text-green-700">
              {formatIndianCurrencyRange(
                pricing.discountedTotalPriceRange.min,
                pricing.discountedTotalPriceRange.max,
              )}
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 space-y-2">
            <p className="text-sm font-semibold text-gray-800">
              Estimated price for first-time users ({pricing.discountPercent}%
              discount included).
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

        <div className="rounded-xl bg-white/70 p-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Why you see a price range
          </p>
          <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
            <li>
              Based on ~{distanceLabel} km route and {vehicleLabel.toLowerCase()}{" "}
              rates
            </li>
            {hasAirportLeg && (
              <li>Includes airport pickup/drop surcharge where applicable</li>
            )}
            {hasRailwayLeg && (
              <li>Allows for station waiting and platform assistance time</li>
            )}
            <li>
              Accounts for day-of variations like traffic, tolls, and route
              changes
            </li>
            <li>
              Exact fare is confirmed on our call — you will not pay more than
              the upper limit shown above
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-white/70 p-4 border border-green-100">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            Care Companion includes:
          </p>
          <ul className="space-y-2">
            {CARE_COMPANION_INCLUDED_SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showCta && ctaHref && (
        <Link
          className="mt-6 inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 py-3.5 rounded-xl text-center font-bold transition-all shadow-lg hover:shadow-xl"
          href={ctaHref}
          onClick={() => onCtaClick?.()}
        >
          Book Now & Save —{" "}
          {formatIndianCurrencyRange(
            pricing.discountedTotalPriceRange.min,
            pricing.discountedTotalPriceRange.max,
          )}
        </Link>
      )}
    </div>
  );
}
