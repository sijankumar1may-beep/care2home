import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";
import HeroSection from "../StationsHeroBanner/HyderabadHeroSection";

export const metadata: Metadata = {
  title: "Hyderabad Railway Station Parent Pickup Service | Care2Home",
  description:
    "Safe and reliable parent pickup service from Hyderabad Deccan Railway Station (HYB). Trained care companions, background-verified, with live updates. Book now for doorstep drop.",
};

export default function HyderabadRailwayStationPage() {
  const stationCode = "HYB";
  const stationName = "Hyderabad Deccan Railway Station";

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
              Why Families Trust Care2Home at Hyderabad Railway Station
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Background Verified
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All our care companions are thoroughly background-verified
                      and trained in elderly care and first aid.
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
                      Till Home Promise
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We don&apos;t just drop at the gate. We help with luggage,
                      stairs, and ensure they&lsquo;re safely inside before
                      leaving.
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
                    <h3 className="font-semibold text-lg mb-2">Live Updates</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Stay informed with real-time journey tracking and updates
                      via WhatsApp throughout the trip.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Stress-Free Parent Pickup from Hyderabad Railway Station
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Hyderabad Deccan Railway Station (HYB), also known as Nampally,
              is a key terminal in Telangana connecting the city to Delhi,
              Mumbai, Chennai, Bengaluru, and more. When your elderly parents
              arrive after a long journey, crowded platforms and busy exits can
              be overwhelming without help.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Care2Home provides safe parent pickup from {stationName}. Our
              trained companions meet your parents at their coach, assist with
              luggage, and stay with them until they are safely home. We also
              serve arrivals at Secunderabad Junction (SC) — book either station
              when you contact us.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike regular cab services that drop passengers at the gate, our
              companions help with stairs, settle your parents indoors, and
              share live WhatsApp updates so you can follow the trip from
              anywhere.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether your parents travel from Delhi, Kolkata, Pune, or other
              cities, we ensure a calm journey from {stationName} ({stationCode})
              to their doorstep. Available 24/7 — call or WhatsApp to confirm
              availability for your train.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">
                Quick Booking Process:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>WhatsApp us with train details and arrival time</li>
                <li>Share your parent&apos;s PNR number</li>
                <li>Our companion meets them at the platform</li>
                <li>Safe journey home with live tracking</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-100 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Parent Pickup from Hyderabad Railway Station
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Give yourself peace of mind. Book a verified care companion for
              your parents today. Available 24/7.
            </p>

            <a
              href="tel:+919910646415"
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
              Serving Hyderabad, Secunderabad, and surrounding areas
            </p>
          </div>
        </div>
      </section>
      <section>
        <PricingModel />
      </section>
      <StickyButton buttonTitle="📞 Call Now | HYB Parent Pickup | 24/7" />
    </div>
  );
}
