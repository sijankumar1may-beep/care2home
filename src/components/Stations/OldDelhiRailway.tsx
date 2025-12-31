import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Cardnew";
import { CheckCircle, Clock, Shield, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Old Delhi Railway Station (DLI)
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight text-balance">
              Trusted Parent Pickup from Old Delhi Railway Station
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
              Parents arriving at Old Delhi Railway Station? Get them home
              safely with our trained care companions. Background-verified
              professionals who take complete responsibility from platform to
              doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Link
                  href={`/book-service`}
                  target="_blank"
                  className="btn-primary"
                  rel="noopener noreferrer"
                >
                  Book now
                
              </Link>
             
                <Link href="/about-us" className="btn-primary bg-green-500">Learn More About Us</Link>
             
            </div>
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
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Book Your Parent&apos;s Safe Journey from Old Delhi Station
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
              Don&apos;t let your parents travel alone. Give them the care and
              comfort they deserve with Care2Home.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-green text-primary"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                Book Now on WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-sm opacity-75">
              Available across Delhi NCR • 24/7 Service
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
