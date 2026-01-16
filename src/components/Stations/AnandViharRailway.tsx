"use client";

import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";
import HeroSection from "../StationsHeroBanner/AnandViharHeroSection";
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
      <HeroSection/>

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
                  Anand Vihar Railway Station is one of Delhi&apos;s busiest railway terminals,
                  connecting the capital with eastern and northern parts of India. For elderly
                  parents arriving after a long train journey, navigating crowded platforms,
                  luggage, and transport can be stressful. Care2Home provides a dedicated
                  parent pickup service from Anand Vihar Railway Station, ensuring your loved
                  ones are received with care and safely escorted home.
                </p>

                <p>
                  Our trained care companions specialize in assisting elderly parents with
                  patience and dignity. From helping with luggage to offering steady support
                  while walking, we focus on comfort at every step. After a tiring journey,
                  your parents are accompanied in a clean, air-conditioned vehicle for a calm
                  and stress-free ride home. Our service is available 24/7, including early
                  mornings and late nights.
                </p>

                <p>
                  Booking a parent pickup from Anand Vihar Railway Station is simple. Just
                  share the train details and PNR via WhatsApp. Our care companion tracks the
                  train arrival, reaches the platform on time, receives your parents directly
                  from the coach, assists with luggage, and ensures a safe doorstep drop.
                  Throughout the journey, you receive live WhatsApp updates for complete peace
                  of mind.
                </p>

                <p>
                  With Care2Home, you get more than transportation — you get end-to-end care.
                  All our care companions are background-verified, trained in elderly care,
                  and committed to till-home responsibility. We serve all areas across Delhi
                  NCR from Anand Vihar Railway Station with transparent and affordable
                  pricing. Choose Care2Home and ensure your parents are cared for, not just
                  picked up.
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
                <h4 className="font-semibold mb-2">Verified Care Companions</h4>
                <p className="text-sm text-gray-600">
                  Background-verified and trained in elderly care
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
      <section className="py-12 md:py-16 bg-gray-100 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Parent Pickup from Anand Vihar Railway Station
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
      <section>
        <PricingModel />
      </section>
      <StickyButton buttonTitle="📞 Call Now | ANVT Parent Pickup | 24/7" />
    </div>
  );
}
