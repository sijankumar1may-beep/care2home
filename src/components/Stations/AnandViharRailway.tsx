"use client";

import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function AnandViharRailway() {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "919910646415";
  const stationName = "Anand Vihar Railway Station";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Care2Home, I need parent pickup service from ${stationName}. Please share details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Anand Vihar Railway Station
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Safe & Comfortable Parent Pickup from Anand Vihar Railway Station
          </h1>

          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Your parents deserve a comfortable journey home. We provide
            reliable, professional pickup service from Anand Vihar Railway
            Station with trained drivers and comfortable vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-service"
              className="bg-green-600 p-4 rounded-2xl text-2xl hover:bg-green-700 text-white gap-2"
            >
              Book now
            </Link>
            <Button size="lg" variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Anand Vihar Railway Station Parent Pickup Service
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Anand Vihar Railway Station is one of Delhi&apos;s major
                  railway terminals, connecting the capital to eastern India and
                  beyond. With thousands of passengers arriving daily, finding
                  reliable transportation for elderly parents can be
                  challenging. Care2Home offers specialized parent pickup
                  services from Anand Vihar Railway Station, ensuring your loved
                  ones travel safely and comfortably to their destination.
                </p>

                <p>
                  Our professional drivers are experienced in handling elderly
                  passengers with patience and care. We understand that after a
                  long train journey, your parents need a comfortable and
                  stress-free ride home. Our vehicles are well-maintained,
                  air-conditioned, and equipped to provide maximum comfort.
                  Whether it&apos;s early morning or late night, our team is
                  available 24/7 to pick up your parents from Anand Vihar
                  Railway Station.
                </p>

                <p>
                  Booking our Anand Vihar Railway Station pickup service is
                  simple. Just share your parent&apos;s train details via
                  WhatsApp, and we&apos;ll handle everything else. Our driver
                  will track the train timing, reach the platform on time,
                  assist with luggage, and ensure a safe doorstep drop. We
                  provide real-time updates so you can track your parent&apos;s
                  journey from the station to home.
                </p>

                <p>
                  With Care2Home, you get more than just a ride. You get peace
                  of mind knowing your parents are in safe hands. Our drivers
                  are background-verified, trained in elderly care, and
                  committed to providing the highest level of service. We serve
                  all areas across Delhi NCR from Anand Vihar Railway Station at
                  transparent, affordable rates. Don&apos;t let your parents
                  struggle with public transport or unreliable cabs. Choose
                  Care2Home for professional, caring parent pickup service from
                  Anand Vihar Railway Station today.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Choose Care2Home for Anand Vihar Station Pickup?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Verified Drivers</h4>
                <p className="text-sm text-gray-600">
                  Background-checked, trained professionals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">On-Time Pickup</h4>
                <p className="text-sm text-gray-600">
                  Train tracking and timely arrival
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Doorstep Drop</h4>
                <p className="text-sm text-gray-600">
                  Safe journey from platform to home
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Book Your Parent Pickup from Anand Vihar Today
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Available 24/7 | Instant Booking via WhatsApp
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-green-600 gap-2"
          >
            <Phone className="w-5 h-5" />
            Book Now on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
