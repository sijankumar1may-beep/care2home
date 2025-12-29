import { Button } from "@/components/Button"
import { Card, CardContent } from "@/components/Cardnew"
import { CheckCircle, Heart, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    const whatsappNumber = "919910646415"; // CHANGE THIS TO YOUR WHATSAPP NUMBER

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
       
          <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight text-balance">
              Trusted care for your parents, till home
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
              We understand the anxiety of having your parents travel alone. Care2Home provides trained, verified
              companions who ensure your loved ones reach home safely with live updates every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-service">Book Care Companion</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href={`${whatsappUrl}`}>Talk on WhatsApp</Link>
              </Button>
            </div>
          </div>
        
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
          <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
              At Care2Home, we believe that your parents deserve more than just a cab ride. They deserve someone who
              cares, someone who takes responsibility, and someone who ensures they are safely home before saying
              goodbye.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Human Connection</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        More than a service, we provide companionship. Our Care Companions treat your parents with the
                        same respect and care they would their own family.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Complete Safety</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every companion is thoroughly background-verified. We take full responsibility from pickup to
                        ensuring they are safely inside their home.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        
          <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Story</h2>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Care2Home was born from a simple observation: thousands of families in India worry every time their
                elderly parents travel alone. Whether it&apos;s returning from a family visit or traveling for medical
                appointments, the journey from the airport or railway station to home is filled with anxiety for both
                parents and children.
              </p>

              <p className="leading-relaxed">
                We realized that booking a cab wasn&apos;t enough. Cab drivers drop passengers at the gate and leave. But
                what about helping with luggage up the stairs? What about ensuring they&apos;re safely inside with their
                medication and keys? What about giving children real-time updates so they can focus on their work
                without constant worry?
              </p>

              <p className="leading-relaxed">
                That&apos;s when we decided to create something different. Not just a transportation service, but a companion
                service. Someone who takes responsibility, someone who cares, and someone who doesn&apos;t leave until your
                parent is safely home.
              </p>

              <p className="leading-relaxed font-semibold text-primary">
                Today, we&apos;re proud to serve families across Delhi NCR, providing peace of mind one journey at a time.
              </p>
            </div>
          </div>
    
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        
          <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">What Sets Us Apart</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-care-green-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Trained Companions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our companions are specially trained in senior care, first aid, and emergency response. They know how
                  to assist elderly passengers with patience and respect.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-care-green-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Till Home Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don&apos;t just drop at the gate. We help with luggage, stairs, and ensure your parent is safely inside
                  before we leave. That&apos;s our promise.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-care-green-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Complete Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Live journey tracking, real-time updates, and 24/7 support access. You stay informed at every step of
                  your parent&apos;s journey home.
                </p>
              </div>
            </div>
          </div>
        
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-primary text-primary-foreground">
       
          <div className="md:mx-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to ensure safe travel for your parents?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed text-balance">
              Book a Care Companion today, or talk to us on WhatsApp to know more. Currently available in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className=" text-primary hover:bg-white/90 hover:text-blue-600">
                <Link href="https://care2home.co/bookservice">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-care-green  text-white text-primary hover:bg-white hover:text-blue-600">
                <Link href="https://wa.me/91XXXXXXXXXX">Talk on WhatsApp</Link>
              </Button>
            </div>
          </div>
        
      </section> */}
    </div>
  )
}
