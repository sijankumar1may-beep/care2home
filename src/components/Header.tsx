import Link from "next/link";
import { Heart, Menu, X, Smartphone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/dropdown-menu";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isActive = (path: string) => router.pathname == path;
  const isBlogSection =
    router.asPath === "/blog" || router.asPath.startsWith("/blog/");
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.care2home"; // REPLACE WITH YOUR ACTUAL PLAY STORE URL

  return (
    <nav className="bg-gray-700 shadow-sm sticky top-0 z-50 h-20 my-auto">
      <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center text-center space-x-2 pt-2"
          >
            {/* <Heart className="w-8 h-8 text-blue-400" /> */}
            <Image
              src="/care2homelogonew.png"
              width={180}
              height={115}
              alt="logo"
              className="rounded-lg mt-2 w-[115px] h-auto md:w-32 md:h-auto lg:w-[180px] lg:h-auto"
            />
            {/* <span className="text-xl font-semibold text-gray-900">Care2Home</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/book-service"
              className={`text-base font-bold transition-colors ${isActive("/book-service")
                ? "text-blue-400"
                : "text-white hover:text-blue-400"
                }`}
            >
              Book Service
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Serving Stations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/new-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/new-delhi-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    New Delhi Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/old-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/old-delhi-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Old Delhi Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-cantt-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-cantt-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Delhi Cantt Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive(
                      "/hazrat-nizamuddin-railway-station-parent-pickup"
                    )
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Hazrat Nizamuddin Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/anand-vihar-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/anand-vihar-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Anand Vihar Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ghaziabad-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/ghaziabad-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Ghaziabad Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-sarai-rohilla-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-sarai-rohilla-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Delhi Sarai Rohilla Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/jaipur-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/jaipur-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Jaipur Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/interchange-service"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/interchange-service")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Stations Interchange
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Serving Airports
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/igi-airport-delhi-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/igi-airport-delhi-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    IGI Airport Delhi Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/t3-igi-airport-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/t3-igi-airport-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    T3 IGI Airport Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/interchange-service"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/interchange-service")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Airport ↔ Station Transfer
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/pricing"
              className={`text-base font-bold transition-colors ${isActive("/pricing")
                ? "text-blue-400"
                : "text-white hover:text-blue-400"
                }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`text-base font-bold transition-colors ${isBlogSection
                ? "text-blue-400"
                : "text-white hover:text-blue-400"
                }`}
            >
              Blog
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/interchange-service"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/interchange-service")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Interchange Service
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/about-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/about-us")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/contact-us")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Contact us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/terms"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/terms")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Terms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/privacy-policy"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/privacy-policy")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Privacy Policy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/safety"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/safety")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Safety & Trust
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/faq"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/faq")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/vision-mission"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/vision-mission")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Vision & Mission
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Tour Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-elder-tour"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-elder-tour")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                   Delhi Elder Tour
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-col items-end">
             
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
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-500 mx-1">
          <div className="px-4 pt-2 pb-4 space-y-2">
           
            <Link
              href="/interchange-service"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg text-base font-medium ${isActive("/interchange-service")
                ? "bg-blue-50 text-blue-400"
                : "text-white hover:bg-gray-50"
                }`}
            >
              Interchange Service
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg text-base font-medium ${isActive("/pricing")
                ? "bg-blue-50 text-blue-400"
                : "text-white hover:bg-gray-50"
                }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg text-base font-medium ${isBlogSection
                ? "bg-blue-50 text-blue-400"
                : "text-white hover:bg-gray-50"
                }`}
            >
              Blog
            </Link>
            <Link
              href="/book-service"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg text-base font-medium ${isActive("/book-service")
                ? "bg-blue-50 text-blue-400"
                : "text-white hover:bg-gray-50"
                }`}
            >
              Book Service
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Serving Stations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/new-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/new-delhi-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    New Delhi Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/old-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/old-delhi-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Old Delhi Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-cantt-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-cantt-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Delhi Cantt Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive(
                      "/hazrat-nizamuddin-railway-station-parent-pickup"
                    )
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Hazrat Nizamuddin Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/anand-vihar-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/anand-vihar-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Anand Vihar Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ghaziabad-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/ghaziabad-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Ghaziabad Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-sarai-rohilla-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-sarai-rohilla-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Delhi Sarai Rohilla Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/jaipur-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/jaipur-railway-station-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Jaipur Railway Station Parent Pickup
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Serving Airports
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/igi-airport-delhi-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/igi-airport-delhi-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    IGI Airport Delhi Parent Pickup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/t3-igi-airport-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/t3-igi-airport-parent-pickup")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    T3 IGI Airport Parent Pickup
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className=" flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/about-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/about-us")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/contact-us")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Contact us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/terms"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/terms")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Terms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/privacy-policy"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/privacy-policy")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Privacy Policy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/safety"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/safety")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Safety & Trust
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/faq"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/faq")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/vision-mission"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/vision-mission")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                    Vision & Mission
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors outline-none text-white font-bold">
                Tour Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-gray-500 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-elder-tour"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${isActive("/delhi-elder-tour")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                      }`}
                  >
                   Delhi Elder Tour
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="py-2">
             
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={55}
                  className="h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
