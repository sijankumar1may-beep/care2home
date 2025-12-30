import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
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

  return (
    <nav className="bg-gray-700 shadow-sm sticky top-0 z-50 h-20 my-auto">
      <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center text-center space-x-2 pt-2"
          >
            {/* <Heart className="w-8 h-8 text-blue-600" /> */}
            <Image
              src="/care2homelogo.png"
              width={180}
              height={80}
              alt="logo"
              className="rounded-lg"
            />
            {/* <span className="text-xl font-semibold text-gray-900">Care2Home</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-base font-bold transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`text-base font-bold transition-colors ${
                isActive("/pricing")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/book-service"
              className={`text-base font-bold transition-colors ${
                isActive("/book-service")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Book Service
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
                    href="/about-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/about-us")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/contact-us")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Contact us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/terms"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/terms")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Terms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/safety"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/safety")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Safety & Trust
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/vision-mission"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/vision-mission")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Vision & Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Serving Stations</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link
                    href="/new-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/new-delhi-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    New Delhi Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/old-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/old-delhi-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Old Delhi Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-cantt-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/delhi-cantt-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Delhi Cantt Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive(
                        "/hazrat-nizamuddin-railway-station-parent-pickup"
                      )
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Hazrat Nizamuddin Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/anand-vihar-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/anand-vihar-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Anand Vihar Railway Station
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 rounded-lg text-base font-medium ${
                isActive("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`block px-4 rounded-lg text-base font-medium ${
                isActive("/pricing")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/book-service"
              onClick={() => setIsOpen(false)}
              className={`block px-4 rounded-lg text-base font-medium ${
                isActive("/book-service")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Book Service
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className=" px-4 flex items-center gap-1 transition-colors outline-none text-white font-bold">
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
                    className={`text-base font-bold transition-colors ${
                      isActive("/about-us")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/contact-us")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Contact us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/terms"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/terms")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Terms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/safety"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/safety")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Safety & Trust
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/vision-mission"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/vision-mission")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Vision & Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Serving Stations</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link
                    href="/new-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/new-delhi-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    New Delhi Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/old-delhi-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/old-delhi-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Old Delhi Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/delhi-cantt-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/delhi-cantt-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Delhi Cantt Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/hazrat-nizamuddin-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive(
                        "/hazrat-nizamuddin-railway-station-parent-pickup"
                      )
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Hazrat Nizamuddin Railway Station
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/anand-vihar-railway-station-parent-pickup"
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors ${
                      isActive("/anand-vihar-railway-station-parent-pickup")
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    Anand Vihar Railway Station
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  );
}
