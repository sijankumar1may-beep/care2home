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
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const whatsappNumber = "919910646415"; // CHANGE THIS TO YOUR WHATSAPP NUMBER
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.care2home"; // REPLACE WITH YOUR ACTUAL PLAY STORE URL

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <>
      <footer className="bg-blue-800 text-white py-12">
        <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/care2homelogonew.png"
                  width={180}
                  height={115}
                  alt="logo"
                  className="rounded-lg mt-2 w-[115px] h-auto md:w-32 md:h-auto lg:w-[180px] lg:h-auto"
                />
              </div>
              <p className="text-white font-bold hover:border-b-2 hover:border-white mb-4">
                Trusted care for parents traveling alone. Peace of mind for
                working professionals.
              </p>
              <div className="mt-4">
                <p className="text-white font-semibold mb-2 text-sm md:text-base">
                  Download our Android App
                </p>
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    width={155}
                    height={60}
                    className="h-auto"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/interchange-service"
                  >
                    Interchange Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/book-service"
                  >
                    Book Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/terms"
                  >
                    Terms & Safety
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
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
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    New Delhi Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/old-delhi-railway-station-parent-pickup"
                  >
                    Old Delhi Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/delhi-cantt-railway-station-parent-pickup"
                  >
                    Delhi Cantt Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                  >
                    Hazrat Nizamuddin Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/anand-vihar-railway-station-parent-pickup"
                  >
                    Anand Vihar Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/ghaziabad-railway-station-parent-pickup"
                  >
                    Ghaziabad Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/delhi-sarai-rohilla-railway-station-parent-pickup"
                  >
                    Delhi Sarai Rohilla Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/jaipur-railway-station-parent-pickup"
                  >
                    Jaipur Railway Station Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/interchange-service"
                  >
                    Stations Interchange
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Serving Airports</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    href="/igi-airport-delhi-parent-pickup"
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    IGI Airport Delhi Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    href="/t3-igi-airport-parent-pickup"
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    T3 IGI Airport Parent Pickup
                  </Link>
                </li>
                <li>
                  <Link
                    href="/interchange-service"
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    Airport ↔ Station Transfer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="flex items-center hover:border-b-2 hover:border-white">
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors flex items-center"
                    href={`${whatsappUrl}`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Support
                  </Link>
                </li>
                <li className="mt-2">
                  <p className="text-white font-semibold mb-2 text-sm">
                    Download our Android App
                  </p>
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      width={130}
                      height={50}
                      className="h-auto"
                    />
                  </a>
                </li>
                <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/about-us"
                  >
                    About us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="hover:border-b-2 hover:border-white transition-colors"
                    href="/our-team"
                  >
                    Our team
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Tour Services</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link
                    href="/delhi-elder-tour"
                    className="hover:border-b-2 hover:border-white transition-colors"
                  >
                    Delhi Elder Tour
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 pb-14 md:pb-2 text-center text-white text-sm">
            <p>&copy; 2026 Care2Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
