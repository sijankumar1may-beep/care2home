import { Button } from "./Button";
import Image from "next/image";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Trusted care for your parents,
              <br />
              till home.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              A trained Care Companion personally meets your parent at the
              airport or railway station and ensures they reach home safely —
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
                href="/bookservice"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition"
              >
                Book Care Companion
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-green-600 text-green-600 text-lg font-medium hover:bg-green-50 transition"
              >
                Talk on WhatsApp
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Currently available in Delhi
            </p>
          </div>

          <div className="relative">
            <Image
              src="/Parents.png"
              alt="Care companion assisting elderly parent during travel"
              className="rounded-2xl shadow-lg"
              width={800}
              height={800}
              
            />
            <p className="text-xs text-gray-400 text-center mt-2">
              Illustrative image
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
