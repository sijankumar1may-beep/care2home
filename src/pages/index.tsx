import HowItWorksSection from "@/components/howitworks";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
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
} from "lucide-react";
import Safetyandtrust from "../components/safetyandtrust";
import HeroBanner from "@/components/HeroBanner";
export default function Home() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroBanner />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Book a Care Companion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share your parent&apos;s travel details through our simple form
                or WhatsApp. We&apos;ll confirm the booking within minutes.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Companion meets your parent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our verified Care Companion arrives at the airport or railway
                station or bus stop with a name placard, ready to assist.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Safe Travel Home
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your parent travels comfortably with live location updates sent
                to you. Our companion ensures they reach home safely.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why not just book a cab?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A cab drops your parent at the gate. Our Care Companion ensures
            they&apos;re safe until they&apos;re home.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <UserCheck className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Human Responsibility
                  </h3>
                  <p className="text-gray-600">
                    Someone who cares, not just a driver. Your parent has a
                    dedicated companion throughout.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <HomeIcon className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Till Home, Not Till Gate
                  </h3>
                  <p className="text-gray-600">
                    We help with luggage, stairs, and ensure they&apos;re safely
                    inside before we leave.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    You Stay Informed
                  </h3>
                  <p className="text-gray-600">
                    Live updates at every step. No more anxiety wondering if
                    they reached safely.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Peace of Mind
                  </h3>
                  <p className="text-gray-600">
                    Focus on your work knowing your parent has someone looking
                    after them.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-10 max-w-lg mx-auto">
          A cab driver&apos;s job ends at the door. A{" "}
          <strong className="text-care-trust">Care Companion</strong> ensures
          your parent is safely home.
        </p>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the care level that fits your needs. No hidden charges.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Standard Care
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">₹999</span>
                  <span className="text-gray-600"> / journey</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Verified Care Companion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Airport/Station to Home
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Luggage assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Live journey updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Basic transport included
                    </span>
                  </li>
                </ul>
                <Button className="w-full">Book Standard Care</Button>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-600">
              <div className="text-center">
                <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Comfort Care
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ₹1,499
                  </span>
                  <span className="text-gray-600"> / journey</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Everything in Standard Care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Premium comfortable transport
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Senior Care Specialist
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority booking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      24/7 support line access
                    </span>
                  </li>
                </ul>
                <Button className="w-full">Book Comfort Care</Button>
              </div>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Prices are for Delhi NCR. Transport arranged based on safety &
            comfort.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to ensure safe travel for your parents?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a Care Companion today, or talk to us on WhatsApp to know more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 border-0"
            >
              Book Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk on WhatsApp
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
