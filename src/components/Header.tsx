import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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
            <Link
              href="/terms"
              className={`text-base font-bold transition-colors ${
                isActive("/terms")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Terms
            </Link>

            <Link
              href="/safety"
              className={`text-base font-bold transition-colors ${
                isActive("/safety")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Safety & Trust
            </Link>
            <Link
              href="/vision-mission"
              className={`text-base font-bold transition-colors ${
                isActive("/vision-mission")
                  ? "text-blue-600"
                  : "text-white hover:text-blue-600"
              }`}
            >
              Vision & Mission
            </Link>
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
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
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
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
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
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/book-service")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Book Service
            </Link>
            <Link
              href="/terms"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/terms")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Terms & Safety
            </Link>
            <Link
              href="/safety"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/safety")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Safety & Trust
            </Link>
            <Link
              href="/visionmission"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/visionmission")
                  ? "bg-blue-50 text-blue-600"
                  : "text-white hover:bg-gray-50"
              }`}
            >
              Vision & Mission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
