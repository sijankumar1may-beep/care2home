"use client";

import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, MapPin } from "lucide-react";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";
import HeroSection from "../TourHeroBanner/HeroBanner";

export default function DelhiElderTour() {
  const whatsappNumber = "919910646415";
  const serviceName = "Delhi Elder Tour Package";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Care2Home, I want to book ${serviceName} for my parent. Please share details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Delhi Elder-Friendly Tour Package with Pickup & Drop
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Exploring Delhi can be overwhelming for elderly parents due to long
                  distances, crowds, and walking. Care2Home offers a specially designed
                  Delhi Elder Tour Package where your parents are picked up from home,
                  assisted throughout the journey, and safely dropped back.
                </p>

                <p>
                  Our trained care companions ensure comfort, patience, and dignity at
                  every step. From wheelchair assistance to helping them explore historical
                  places at a relaxed pace, we focus on making the experience enjoyable
                  and stress-free.
                </p>

                <p>
                  The tour covers iconic locations like Red Fort, India Gate, Qutub Minar,
                  and Lotus Temple. We ensure frequent breaks, clean washroom stops, and
                  comfortable AC travel throughout the day.
                </p>

                <p>
                  Families receive live updates and can track the journey, ensuring complete
                  peace of mind. With Care2Home, it’s not just a tour—it’s a safe and caring
                  experience for your parents.
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
            Why Choose Our Delhi Elder Tour?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Verified Care Companion</h4>
                <p className="text-sm text-gray-600">
                  Trained staff for elderly support and safety
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Relaxed Experience</h4>
                <p className="text-sm text-gray-600">
                  Slow-paced tour with rest breaks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Doorstep Pickup & Drop</h4>
                <p className="text-sm text-gray-600">
                  Safe journey from home to home
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Book Delhi Elder Tour for Your Parents
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Give your parents a safe and joyful travel experience in Delhi.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 px-8 py-3 rounded-lg font-semibold text-lg text-white"
            >
              💬 Book on WhatsApp
            </button>

            <p className="mt-4 text-sm opacity-75">
              Available across Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <PricingModel />
      </section>

      {/* Sticky CTA */}
      <StickyButton buttonTitle="📞 Call Now | Delhi Elder Tour | 24/7" />
    </div>
  );
}