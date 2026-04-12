import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after component mounts
    setIsMounted(true);
    
    // Show popup after 500ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render until mounted (prevents hydration issues)
  if (!isMounted) {
    return null;
  }

  // Don't render anything if popup is closed
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-opacity-50 z-[9998] transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative pointer-events-auto transform transition-all duration-300 scale-100">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Discount Badge */}
            <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full mb-4 transform -rotate-2">
              <span className="text-2xl font-bold">10% OFF</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Special Offer for
              <br />
              <span className="text-blue-600">First-Time Users!</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-lg">
              Get <span className="font-bold text-blue-600">10% discount</span> on
              your first booking. Safe travel for your parents, peace of mind for
              you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book-service"
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now & Save
              </Link>
              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20want%20to%20avail%20the%2040%25%20discount%20offer%20for%20first-time%20users."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Talk on WhatsApp
              </a>
            </div>

            {/* Fine Print */}
            <p className="text-xs text-gray-500 mt-4">
              * Valid for first-time users only. Terms & conditions apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

