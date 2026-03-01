import Link from "next/link";
import { Home, ArrowLeft, Search, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/care2homelogonew.png"
            width={180}
            height={115}
            alt="Care2Home Logo"
            className="rounded-lg w-[115px] h-auto md:w-32 md:h-auto lg:w-[180px] lg:h-auto"
          />
        </div>

        {/* 404 Error */}
        <div className="mb-6">
          <h1 className="text-9xl md:text-[12rem] font-bold text-blue-600 mb-4 leading-none">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for seems to have taken a different route.
            <br />
            Don't worry, we'll help you get back on track.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Here are some helpful links:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Link>
            <Link
              href="/book-service"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Book Service
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Pricing
            </Link>
            <a
              href="https://wa.me/919910646415?text=Hi%2C%20I%20need%20help%20finding%20a%20page%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Popular Pages */}
        {/* <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Home
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/book-service"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Book Service
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/pricing"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Pricing
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/new-delhi-railway-station-parent-pickup"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              New Delhi Station
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/igi-airport-delhi-parent-pickup"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              IGI Airport
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact-us"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div> */}

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

