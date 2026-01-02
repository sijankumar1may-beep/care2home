import { Button } from "@/components/Button"
import { Card, CardContent } from "@/components/Cardnew"
import { CheckCircle, Clock, Shield, Phone, MapPin } from "lucide-react"
import type { Metadata } from "next"
import StickyButton from "../StickyButton";
export const metadata: Metadata = {
  title: "Delhi Cantt Railway Station Parent Pickup Service | Care2Home",
  description:
    "Safe parent pickup from Delhi Cantt Railway Station. Trained care companions with live tracking ensure doorstep responsibility. Book your parent's safe journey now.",
}

export default function DelhiCanttPage() {
  // WhatsApp number - replace with your actual number (country code without + or spaces)
  const whatsappNumber = "919910646415"
  const stationCode = "DEC"
  const stationName = "Delhi Cantt Railway Station"

  const bookingMessage = encodeURIComponent(
    `Hi, I want to book a Care Companion for parent pickup from ${stationName} (${stationCode}). Please share the details.`,
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
            Delhi Cantt Railway Station (DEC)
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Parents Arriving Alone at Delhi Cantt Railway Station?
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
                href="https://wa.me/919910646415?text=Hi%2C%20I%20need%20parent%20pickup%20from%20Delhi%20Cantt%20Railway%20Station%20(DEC).%20Please%20share%20details."
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
              Why Families Choose Care2Home for Delhi Cantt
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Police-Verified</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All care companions are police-verified and trained in senior citizen care and emergency response.
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
                    <h3 className="font-semibold text-lg mb-2">Door-to-Door Care</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      From platform assistance to helping settle at home - complete end-to-end support for your parents.
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
                      Track your parent&apos;s journey in real-time with location updates and photos sent via WhatsApp.
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
              Reliable Parent Pickup Service at Delhi Cantt Railway Station
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Delhi Cantt Railway Station, strategically located in the cantonment area of South West Delhi, is a key
              stop for several important trains including the August Kranti Rajdhani, Karnataka Express, and Kerala
              Express. When your parents arrive here after long-distance travel, they deserve more than just a cab ride
              home.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Care2Home&apos;s specialized pickup service from Delhi Cantt Railway Station provides trained care companions
              who understand the unique needs of elderly passengers. Our companions are punctual, patient, and trained
              to handle mobility challenges. They meet your parents at their designated coach, assist with luggage, and
              ensure a stress-free journey from the platform to home.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike traditional taxi or cab services, we take complete responsibility. Our &quot;Till Home&quot; promise means we
              don&apos;t just drop your parents at the building entrance. We help carry bags up stairs, ensure they&apos;re
              comfortably inside with all essentials accessible, and confirm their safe arrival with you before leaving.
              This comprehensive care approach has made us the trusted choice for hundreds of families across Delhi NCR.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Delhi Cantt serves trains from Bangalore, Trivandrum, Mangalore, Chennai, and other South Indian cities.
              If your parents travel frequently on these routes, Care2Home ensures every arrival is safe and
              comfortable. Book instantly via WhatsApp and receive real-time updates throughout the journey. Available
              24/7 across all Delhi NCR locations.
            </p>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">Simple Booking Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Message us on WhatsApp with train details</li>
                <li>Share PNR number and arrival time</li>
                <li>Get assigned companion details</li>
                <li>Receive live updates during the journey</li>
                <li>Get confirmation once parents are home safe</li>
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
              Book Parent Pickup from Delhi Cantt Railway Station
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
      <StickyButton buttonTitle="📞 Call Now | DEC Parent Pickup | 24/7" />
    </div>
  )
}
