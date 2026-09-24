"use client";

import { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";
import Link from "next/link";

import { firstTimeUserDiscountAmount } from "@/lib/pricing-config";
import { formatIndianCurrency } from "@/lib/pricing";

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const discountLabel = formatIndianCurrency(firstTimeUserDiscountAmount);

  const whatsAppMessage = `Hi, I'm interested in the ${discountLabel} discount offer for Care2Home's parent pickup and drop service. Could you please share more details?`;

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 280);
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[9998] bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
        aria-hidden
      />

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="discount-popup-title"
          className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative pointer-events-auto transition-all duration-300 ${
            isClosing
              ? "opacity-0 scale-90 translate-y-3"
              : "opacity-100 scale-100 animate-scale-in"
          }`}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-200"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full mb-4 shadow-lg animate-sparkle-nudge animate-fade-in-up"
              style={{ animationDelay: "80ms" }}
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-2xl font-bold">{discountLabel} OFF</span>
            </div>

            <h2
              id="discount-popup-title"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              Special Offer for
              <br />
              <span className="text-blue-600">First-Time Users!</span>
            </h2>

            <p
              className="text-gray-600 mb-6 text-lg animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              Get{" "}
              <span className="font-bold text-blue-600">
                {discountLabel} discount
              </span>{" "}
              on your first booking. Safe travel for your parents, peace of mind
              for you.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/book-service"
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Book Now & Save
              </Link>
              <a
                href={`https://wa.me/919910646415?text=${encodeURIComponent(whatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="bg-green-600 hover:bg-green-700 hover:-translate-y-0.5 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Talk on WhatsApp
              </a>
            </div>

            <p
              className="text-xs text-gray-500 mt-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              * Valid for first-time users only. Terms & conditions apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
