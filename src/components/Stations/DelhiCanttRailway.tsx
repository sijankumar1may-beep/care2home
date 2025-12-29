import { Button } from "@/components/Button"
import { Card, CardContent } from "@/components/Cardnew"
import { CheckCircle, Clock, Shield, Phone } from "lucide-react"
import type { Metadata } from "next"

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
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Delhi Cantt Railway Station (DEC)
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Safe & Reliable Parent Pickup from Delhi Cantt Station
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
              Ensure your parents reach home safely from Delhi Cantt Railway Station. Our background-verified care
              companions provide door-to-door assistance with live journey updates via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <a
                  href={`/book-service`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  Book now
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="/about-us">Learn More About Us</a>
              </Button>
            </div>
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
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Care Companion for Delhi Cantt Station Pickup
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Give your parents the safe, comfortable journey they deserve. One WhatsApp message away from peace of
              mind.
            </p>
            <Button size="lg" variant="secondary" className="bg-green text-primar">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                Book Now via WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-sm opacity-75">Serving entire Delhi NCR • Round-the-clock availability</p>
          </div>
        </div>
      </section>
    </div>
  )
}
