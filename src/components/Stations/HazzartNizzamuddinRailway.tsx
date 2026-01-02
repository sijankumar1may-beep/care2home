"use client";

import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import StickyButton from "../StickyButton";

export default function HazratNizamuddinRailway() {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "919910646415";
  const stationName = "Hazrat Nizamuddin Railway Station";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Care2Home, I need parent pickup service from ${stationName}. Please share details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Hazrat Nizamuddin Railway Station (NZM)
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Parents Arriving Alone at Hazrat Nizamuddin Railway Station?
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-balance">
              We receive your parents directly from the train platform, assist with luggage,
              and safely drop them inside their home.
              <span className="block mt-2 font-medium text-foreground">
                Live WhatsApp updates at every step.
              </span>
            </p>

            {/* Trust bullets */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground mb-8">
              <span>✔ Background-Verified Companions</span>
              <span>✔ Till-Home Responsibility</span>
              <span>✔ Delhi NCR Only</span>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919910646415"
                className="rounded-lg bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                📞 Call Now – 2 Min Booking
              </a>

              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20need%20parent%20pickup%20from%20Hazrat%20Nizamuddin%20Railway%20Station%20(NZM).%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-accent text-accent px-6 py-3 text-lg font-medium hover:bg-accent/10 transition flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">
              Trains arriving today? Book instantly.
            </p>
            {/* Micro reassurance */}
            <p className="mt-4 text-sm text-muted-foreground">
              Most families book via a quick phone call • Available 24/7
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hazrat Nizamuddin Station Parent Pickup Service
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Hazrat Nizamuddin Railway Station is a premier railway
                  terminal in Delhi, serving as a major hub for prestigious
                  trains like Rajdhani, Shatabdi, and Duronto Express. When your
                  elderly parents arrive at this busy station, you want to
                  ensure they have a safe, comfortable journey home. Care2Home
                  specializes in providing dedicated parent pickup services from
                  Hazrat Nizamuddin Railway Station with professional care and
                  reliability.
                </p>

                <p>
                  Our experienced drivers understand the unique needs of elderly
                  passengers. After a long train journey, comfort and safety are
                  paramount. We provide well-maintained, air-conditioned
                  vehicles with comfortable seating to ensure your parents
                  travel in complete comfort. Our team monitors train schedules
                  in real-time, ensuring we&apos;re always on time, whether the
                  train arrives early or is delayed.
                </p>

                <p>
                  Booking our Hazrat Nizamuddin pickup service is hassle-free.
                  Simply message us on WhatsApp with your parent&apos;s train
                  details, and we&apos;ll take care of everything. Our driver
                  will meet your parents at the designated platform, help with
                  luggage, and provide a smooth, safe ride to their destination.
                  We keep you updated throughout the journey, so you always know
                  your parents are in safe hands.
                </p>

                <p>
                  Care2Home is more than just a transportation service.
                  We&apos;re your trusted partner in ensuring your parents&apos;
                  safety and comfort. All our drivers are thoroughly
                  background-verified, trained in elderly assistance, and
                  committed to providing compassionate service. We cover all
                  areas of Delhi NCR from Hazrat Nizamuddin Railway Station with
                  transparent pricing and no hidden charges. Give your parents
                  the gift of a comfortable, dignified journey home. Book
                  Care2Home&apos;s professional parent pickup service from
                  Hazrat Nizamuddin Railway Station today.
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
            Why Care2Home for Hazrat Nizamuddin Pickup?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Trusted Service</h4>
                <p className="text-sm text-gray-600">
                  Verified drivers with elderly care training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Available</h4>
                <p className="text-sm text-gray-600">
                  Round-the-clock pickup service
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Complete Care</h4>
                <p className="text-sm text-gray-600">
                  Platform pickup to doorstep delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Parent Pickup from Hazrat Nizamuddin Railway Station
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Give yourself peace of mind. Book a verified care companion for
              your parents today. Available 24/7.
            </p>

            <a
              href={`tel:+919910646415`}
              target="_blank"
              className="inline-block bg-green-500 px-8 py-3 rounded-lg font-semibold text-lg text-white"
              rel="noopener noreferrer"
            >
              📞 Call Now – Speak to a Human
            </a>
            <p className="mt-3 text-sm font-medium text-foreground">
              Trains arriving today? Book instantly.
            </p>
            <p className="mt-3 text-sm opacity-80">
              Most bookings are confirmed over a quick call
            </p>
            <p className="mt-4 text-sm opacity-75">
              Serving Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad
            </p>
          </div>
        </div>
      </section>
      <StickyButton buttonTitle="📞 Call Now | NZM Parent Pickup | 24/7" />
    </div>
  );
}
