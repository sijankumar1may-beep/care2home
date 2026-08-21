import { MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const trustPoints = [
    "Background-Verified Companions",
    "Till-Home Responsibility",
    "Across India (Delhi NCR hub)",
  ];

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-10">
      <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        {/* Location Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Delhi Cantt Railway Station (DEC)
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Parents Arriving Alone at Delhi Cantt Railway Station?
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="font-medium">
                We receive your parents directly from the train platform, assist
                with luggage, and safely drop them at home
              </span>
              <span className="text-muted-foreground"> — </span>
              <span className="text-green-700 font-medium">
                and we also receive them from home and drop them at the station
                for departures
              </span>.
              <span className="block mt-2 font-medium text-foreground">
                Live WhatsApp updates at every step.
              </span>
            </p>

            {/* Trust bullets */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {trustPoints.map((point, index) => (
                <span key={index} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {point}
                </span>
              ))}
            </div>

            {/* Primary CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="tel:+919910646415"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cta-green text-white px-6 py-3.5 text-lg font-semibold hover:bg-cta-green-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now – 2 Min Booking
              </a>

              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20need%20parent%20pickup%20from%20Delhi%20Cantt%20Railway%20Station%20(DEC).%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent text-accent bg-white px-6 py-3.5 text-lg font-medium hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Micro reassurance */}
            <div
              className="mt-6 space-y-1 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm font-medium text-foreground">
                Trains arriving today? Book instantly.
              </p>
              <p className="text-sm text-muted-foreground">
                Most families book via a quick phone call • Available 24/7
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/delhicanttfinal.png"
                  alt="Care companion assisting an elderly parent at railway station"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Trust overlay badge */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Trusted by many families
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Safe & verified travel care companions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional spacing to avoid overlay touching edges on very small screens */}
              <div className="h-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
