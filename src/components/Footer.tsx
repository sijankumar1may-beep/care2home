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
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <Image src="/care2homelogo.png" width={180} height={80} alt="logo" className="rounded-lg"/>
              </div>
              <p className="text-gray-400">
                Trusted care for parents traveling alone. Peace of mind for
                working professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/bookservice">
                    Book Service
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/terms">
                    Terms & Safety
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </li>
                <li>Available for Delhi NCR</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Care2Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
