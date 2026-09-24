import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";
import HeroSection from "../AirportHeroBanner/JewarHeroSection";

export const metadata: Metadata = {
  title: "Noida Jewar Airport Parent Pickup Service | Care2Home",
  description:
    "Safe and reliable parent pickup service from Noida International Airport, Jewar (DXN). Trained care companions, background-verified, with live updates. Book now for doorstep drop.",
};

export default function JewarAirportPickupPage() {
  const airportCode = "DXN";
  const airportName = "Noida International Airport, Jewar";

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
              Why Families Trust Care2Home at Noida Jewar Airport
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
              Stress-Free Parent Pickup from Noida Jewar Airport
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Noida International Airport at Jewar ({airportCode}) serves
              Greater Noida, Noida, Yamuna Expressway, and nearby NCR areas.
              For elderly parents landing alone, a new terminal, long walks,
              and ground transport can feel overwhelming—especially after a
              long flight.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Care2Home provides dedicated parent pickup from {airportName}.
              Our companions track your flight, meet your parents at the agreed
              arrival point, help with bags, and travel with them until they are
              safely home—not just to the airport exit.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We also assist departures: picking up your parents from home and
              escorting them to check-in at Jewar. You receive WhatsApp updates
              from meet-up through doorstep drop or terminal handover.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether your parents fly in from Mumbai, Bengaluru, Hyderabad, or
              international hubs, book verified care for {airportName} (
              {airportCode}). Serving Noida, Greater Noida, Jewar, and Delhi NCR
              — available 24/7.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">
                Quick Booking Process:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>WhatsApp or call with flight number and arrival time</li>
                <li>Share passenger name and contact details</li>
                <li>Our companion meets them at the airport</li>
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
              Book Parent Pickup from Noida Jewar Airport
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
              Flights arriving today? Book instantly.
            </p>
            <p className="mt-3 text-sm opacity-80">
              Most bookings are confirmed over a quick call
            </p>
            <p className="mt-4 text-sm opacity-75">
              Serving Noida, Greater Noida, Jewar, and Delhi NCR
            </p>
          </div>
        </div>
      </section>
      <section>
        <PricingModel />
      </section>
      <StickyButton buttonTitle="📞 Call Now | Jewar Airport Parent Pickup | 24/7" />
    </div>
  );
}
