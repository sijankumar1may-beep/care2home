import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Delhi Railway Station Parent Pickup Service | Care2Home",
  description:
    "Safe and reliable parent pickup service from New Delhi Railway Station (NDLS). Trained care companions, background-verified, with live updates. Book now for doorstep drop.",
};

export default function NewDelhiRailwayStationPage() {
  // WhatsApp number - replace with your actual number (country code without + or spaces)
  const whatsappNumber = "919910646415";
  const stationCode = "NDLS";
  const stationName = "New Delhi Railway Station";

  const bookingMessage = encodeURIComponent(
    `Hi, I want to book a Care Companion for parent pickup from ${stationName} (${stationCode}). Please share the details.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              New Delhi Railway Station (NDLS)
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Safe Parent Pickup from New Delhi Railway Station
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
              Your parents arriving at New Delhi Railway Station? Don&apos;t
              worry about their journey home. Our trained care companions ensure
              they reach home safely with live updates every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Book via WhatsApp
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
              Why Families Trust Care2Home at New Delhi Railway Station
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

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Stress-Free Parent Pickup from New Delhi Railway Station
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              New Delhi Railway Station (NDLS) is one of India&apos;s busiest
              railway terminals, handling thousands of passengers daily. When
              your elderly parents arrive here after a long train journey, the
              last thing you want is for them to navigate the crowded platforms,
              heavy luggage, and taxi queues alone.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Care2Home specializes in safe parent pickup from New Delhi Railway
              Station. Our trained care companions meet your parents right at
              their coach, help with luggage, and accompany them throughout the
              journey home. We understand that elderly passengers need extra
              care and patience, especially after long-distance travel.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike regular cab services that simply drop passengers at the
              gate, our companions take complete responsibility. They help
              navigate stairs, ensure your parents are comfortably settled
              inside their home, and only leave after confirming everything is
              okay. You receive live updates via WhatsApp, giving you complete
              peace of mind while you&apos;re at work or away.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether your parents are arriving from Kolkata, Mumbai, Lucknow,
              or any other city, our service ensures they have a safe,
              comfortable journey from New Delhi Railway Station to their
              doorstep. Available 24/7 across Delhi NCR, we&apos;re just a
              WhatsApp message away.
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Parent Pickup from New Delhi Railway Station
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Give yourself peace of mind. Book a verified care companion for
              your parents today. Available 24/7.
            </p>
            
              <a
                href={`/book-service`}
                target="_blank"
                className="btn-primary bg-green-500"
                rel="noopener noreferrer"
              >
                Book now
              </a>
           
            <p className="mt-4 text-sm opacity-75">
              Serving Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
