import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => true;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Heart className="w-8 h-8 text-blue-600" /> */}
            <Image src="/care2homelogo.png" width={180} height={80} alt="logo" />
            {/* <span className="text-xl font-semibold text-gray-900">Care2Home</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/bookservice"
              className={`text-base font-medium transition-colors ${
                isActive("/bookservice")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Book Service
            </Link>
            <Link
              href="/terms"
              className={`text-base font-medium transition-colors ${
                isActive("/terms")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Terms
            </Link>

            <Link
              href="/safety"
              className={`text-base font-medium transition-colors ${
                isActive("/safety")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Safety & Trust
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/bookservice"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/book")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
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
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Terms & Safety
            </Link>
            <Link
              href="/safety"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive("/terms")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Safety & Trust
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
