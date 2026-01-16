import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  PhoneCall,
  Clock,
  MessageCircle,
  CheckCircle,
  Plane,
  Train,
  Home as HomeIcon,
  Heart,
  UserCheck,
  Bell,
  Fullscreen,
} from "lucide-react";
const HeroBanner = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 leading-tight mb-6">
              Parents arriving today or tomorrow?
              <span className="block mt-3">
                We personally
                <span className="text-blue-700">
                  {" "}
                  receive them at the station/airport and drop them home safely
                </span>
                — and also
                <span className="text-green-700">
                  {" "}
                  receive them at home and drop them at the station/airport
                </span>
                .
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              A trained Care Companion receives your parent at the
              airport/railway station and ensures a safe drop home — or receives
              them from home and drops them at the airport/railway station —
              with live updates for you.
            </p>

            <ul className="flex flex-col sm:flex-row gap-4 text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Background-verified companions
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l7 7-7 7-7-7 7-7z"></path>
                </svg>
                Doorstep responsibility
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                Live journey updates
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919910646415?text=Hi%20I%20need%20parent%20pickup%20service."
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-green-600 bg-green-600 text-white text-lg font-medium hover:bg-green-500 transition"
              >
                Talk on WhatsApp
              </a>
              <Link
                href="/book-service"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 text-black text-lg font-medium transition"
              >
                Book Online
              </Link>
            </div>
            <p className="text-sm text-black mt-2">
              Parents arriving today? Book instantly.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              Currently available in Delhi NCR • Avg response time under 5
              minutes
            </p>
          </div>

          <div className="relative order-1 md:order-2">
            <Image
              src="/servcefinal.png"
              alt="Care companion assisting elderly parent during travel"
              className="rounded-2xl shadow-lg"
              width={800}
              height={800}
            />
            <p className="text-xs text-gray-400 text-center mt-2">
              Illustrative image
            </p>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Trusted by many families
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Safe & verified travel care companions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
