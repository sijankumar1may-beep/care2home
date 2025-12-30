import {
  Shield,
  Clock,
  MessageCircle,
  CheckCircle,
  Plane,
  Train,
  Home as HomeIcon,
  Heart,
  UserCheck,
  Bell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const whatsappNumber = "919910646415"; // CHANGE THIS TO YOUR WHATSAPP NUMBER

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <>
      <footer className="bg-gray-700 text-white py-12">
        <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-16 md:grid-cols-4 md:gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/care2homelogo.png"
                  width={180}
                  height={80}
                  alt="logo"
                  className="rounded-lg"
                />
              </div>
              <p className="text-white font-bold hover:text-blue-600">
                Trusted care for parents traveling alone. Peace of mind for
                working professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/book-service"
                  >
                    Book Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/terms"
                  >
                    Terms & Safety
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/vision-mission"
                  >
                    Vision & Mission
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Serving Stations</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    href="/new-delhi-railway-station-parent-pickup"
                    className="hover:text-blue-600 transition-colors"
                  >
                    New Delhi Railway Station
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/old-delhi-railway-station-parent-pickup"
                  >
                    Old Delhi Railway Station
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/delhi-cantt-railway-station-parent-pickup"
                  >
                    Delhi Cantt Railway Station
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                  >
                    Hazrat Nizamuddin Railway Station
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/anand-vihar-railway-station-parent-pickup"
                  >
                    Anand Vihar Railway Station
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="flex items-center hover:text-blue-600">
                  <Link
                    className="hover:text-blue-600 transition-colors flex items-center"
                    href={`${whatsappUrl}`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/about-us"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-600 transition-colors"
                    href="/our-team"
                  >
                    Our team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-white text-sm">
            <p>&copy; 2025 Care2Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
