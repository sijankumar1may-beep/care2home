import Link from "next/link";
import { Car, CheckCircle, User } from "lucide-react";
import {
  CARE_COMPANION_INCLUDED_SERVICES,
  formatDistanceKm,
  formatIndianCurrency,
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
};

export function JourneyPriceBreakdown({
  pricing,
  showCta = false,
  ctaHref,
}: JourneyPriceBreakdownProps) {
  const distanceLabel = formatDistanceKm(pricing.distanceKm);
  const vehicleLabel = getVehicleLabel(pricing.vehicleType);
  const VehicleIcon = pricing.vehicleType === "car" ? Car : Car;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left">
      <div className="text-center mb-5">
        <h4 className="text-xl font-bold text-gray-900">Your Journey Price</h4>
        <p className="text-green-800 font-medium mt-1">{distanceLabel} km journey</p>
      </div>

      <div className="space-y-4">
        <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Price Breakdown
        </h5>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <VehicleIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">{vehicleLabel}</p>
              <p className="text-sm text-gray-600 mt-0.5">
                {distanceLabel} km journey + applicable travel charges
              </p>
            </div>
          </div>
          <p className="font-semibold text-gray-900 shrink-0">
            {formatIndianCurrency(pricing.transportationFee)}
          </p>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <User className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Care Companion</p>
              <p className="text-sm text-gray-600 mt-0.5">
                Dedicated assistance throughout the journey
              </p>
            </div>
          </div>
          <p className="font-semibold text-gray-900 shrink-0">
            {formatIndianCurrency(pricing.careCompanionFee)}
          </p>
        </div>

        <div className="border-t border-green-200 pt-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-bold text-gray-900">Total Journey Price</p>
            <p className="text-3xl md:text-4xl font-bold text-green-800">
              {formatIndianCurrency(pricing.totalPrice)}
            </p>
          </div>
          <p className="text-sm text-green-700 mt-2 text-center sm:text-left">
            No hidden charges
          </p>
        </div>

        <div className="bg-white/70 rounded-lg p-4 border border-green-100">
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
          className="mt-5 inline-block w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-2xl text-center font-semibold transition-colors"
          href={ctaHref}
        >
          Book This Service — {formatIndianCurrency(pricing.totalPrice)}
        </Link>
      )}
    </div>
  );
}
