import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyButton from "../StickyButton";
export const metadata: Metadata = {
  title: "Old Delhi Railway Station Parent Pickup Service | Care2Home",
  description:
    "Reliable parent pickup from Old Delhi Railway Station (DLI). Background-verified care companions ensure safe doorstep drop with live tracking. Book now via WhatsApp.",
};

export default function OldDelhiRailwayStationPage() {
  // WhatsApp number - replace with your actual number (country code without + or spaces)
  const whatsappNumber = "919910646415";
  const stationCode = "DLI";
  const stationName = "Old Delhi Railway Station";

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
            Old Delhi Railway Station (DLI)
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Parents Arriving Alone at Old Delhi Railway Station?
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
                href="tel:+919910646415"
                className="rounded-lg bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                📞 Call Now – 2 Min Booking
              </a>

              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20need%20parent%20pickup%20from%20Old%20Delhi%20Railway%20Station%20(DLI).%20Please%20share%20details."
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
              Why Care2Home is Perfect for Old Delhi Railway Station
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
                      Every companion undergoes thorough background verification
                      and specialized elderly care training.
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
                      Complete Care
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      From platform pickup to helping with stairs at home - we
                      provide end-to-end assistance.
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
                      Real-Time Tracking
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Get live location updates and photos via WhatsApp
                      throughout your parent&apos;s journey home.
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
              Hassle-Free Parent Pickup Service at Old Delhi Railway Station
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Old Delhi Railway Station, located in the heart of historic Delhi,
              serves as a major railway junction connecting North India. The
              station&apos;s busy platforms and congested areas can be
              overwhelming for elderly passengers, especially after a tiring
              journey. This is where Care2Home makes all the difference.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our specialized parent pickup service from Old Delhi Railway
              Station ensures your loved ones never feel lost or anxious. Our
              care companions arrive early, track train arrivals, and meet your
              parents right at their designated coach. They assist with luggage,
              navigate the crowded station, and ensure a comfortable ride home
              in a clean, air-conditioned vehicle.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              What sets us apart is our &quot;Till Home Promise.&quot; We
              don&apos;t believe in just dropping passengers at the building
              gate. Our companions help carry luggage up stairs, ensure your
              parents are comfortably inside their home with keys and
              medications accessible, and only leave after confirming everything
              is perfect. This level of care brings immense relief to families
              living away from their parents.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Old Delhi Railway Station connects trains from Punjab, Haryana,
              Rajasthan, and other northern states. Whether your parents are
              arriving on the Shatabdi, Rajdhani, or any long-distance train,
              Care2Home provides reliable pickup service with real-time updates
              sent directly to your WhatsApp. Book now for complete peace of
              mind.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">
                How It Works:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Share train PNR and arrival time on WhatsApp</li>
                <li>We assign a verified care companion</li>
                <li>Companion meets parents at the platform</li>
                <li>Safe journey with live updates to your phone</li>
                <li>Doorstep drop with complete assistance</li>
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
              Book Parent Pickup from Old Delhi Railway Station
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
      <StickyButton buttonTitle="📞 Call Now | DLI Parent Pickup | 24/7" />
    </div>
  );
}
