import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";

export const metadata: Metadata = {
  title: "Delhi Sarai Rohilla Railway Station Parent Pickup Service | Care2Home",
  description:
    "Reliable parent pickup from Delhi Sarai Rohilla Railway Station (DEE). Background-verified Care2Home companions ensure safe doorstep drop with live WhatsApp updates. Book now.",
};

export default function DelhiSaraiRohillaRailwayStationPage() {
  const whatsappNumber = "919910646415";
  const stationCode = "DEE";
  const stationName = "Delhi Sarai Rohilla Railway Station";

  const bookingMessage = encodeURIComponent(
    `Hi, I want to book a Care Companion for parent pickup from ${stationName} (${stationCode}). Please share the details.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {stationName} ({stationCode})
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Parents Arriving Alone at Delhi Sarai Rohilla?
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
              <span>✔ Expert Handling at Crowded Stations</span>
              <span>✔ Delhi NCR Only</span>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:+${whatsappNumber}`}
                className="rounded-lg bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                📞 Call Now – 2 Min Booking
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
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

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
              Why Care2Home Works Best for Delhi Sarai Rohilla (DEE)
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Verified Companions
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every companion is background-verified and trained to support elderly
                      travellers in busy station environments.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Till-Home Responsibility
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We don’t stop at the gate. We help your parents get comfortably inside
                      their home with luggage and essentials handled.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Live WhatsApp Updates
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Get real-time updates (status, location, and key moments) on WhatsApp
                      so you always know your parent is safe.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Hassle-Free Parent Pickup Service at Delhi Sarai Rohilla Railway Station
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Delhi Sarai Rohilla (DEE) is a key station for many trains connecting Delhi with
              Rajasthan, Haryana, Punjab, and other routes. For elderly passengers, crowded
              platforms, luggage handling, and finding the right exit can be stressful—especially
              after a long journey.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Care2Home makes the arrival smooth. Our companion tracks the train, reaches the
              platform in advance, and receives your parent at the coach. We assist with luggage,
              help them move comfortably through the station, and arrange a safe ride home in a
              clean vehicle.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our promise is simple: your parent is never left alone. From platform pickup to
              doorstep drop, the companion stays with your parent and supports every step—stairs,
              lifts, walking support, and settling in at home.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether your parent is arriving on a daily express, an overnight train, or a
              long-distance route, we keep you updated on WhatsApp so you can relax—even when
              you’re in another city.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">How It Works:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Share train PNR and arrival time on WhatsApp</li>
                <li>We assign a verified Care2Home Companion</li>
                <li>Companion receives your parent at the platform/coach</li>
                <li>Live WhatsApp updates during the journey</li>
                <li>Doorstep drop with till-home assistance</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Parent Pickup from Delhi Sarai Rohilla (DEE)
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Get complete peace of mind. Book a background-verified Care2Home Companion for your
              parent today. Available 24/7.
            </p>

            <a
              href={`tel:+${whatsappNumber}`}
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

      <StickyButton buttonTitle="📞 Call Now | DEE Parent Pickup | 24/7" />
    </div>
  );
}
