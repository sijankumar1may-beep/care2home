"use client";

import { MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Image from "next/image";

type InterchangeHeroProps = {
  whatsappNumber?: string; // e.g. "919910646415"
  imageSrc?: string; // e.g. "/interchange.png"
  title?: string;
  badgeText?: string;
};

export default function InterchangeHeroSection({
  whatsappNumber = "919910646415",
  imageSrc = "/interchangeservice.png",
  title = "Living in another city? Don’t let your parents change stations/Airport alone in Delhi.",
  badgeText = "Interchange Service (Delhi NCR)",
}: InterchangeHeroProps) {
  const trustPoints = [
    "Background-Verified Companions",
    "Till-Handover Responsibility",
    "Delhi NCR Only",
  ];

  const whatsappText = encodeURIComponent(
    "Hi, I need Interchange Service (receive from one train/flight and drop to another). Please share details."
  );

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-10">
      <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        {/* Location Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {badgeText}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {title}
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="font-medium">
              We receive your parents on arrival, assist them during the interchange, and wait with them until their next train/flight departs
              </span>
              <span className="text-muted-foreground"> — </span>
              <span className="text-green-700 font-medium">
                station to station, airport to station, or terminal to terminal
              </span>
              .
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
                href={`tel:+${whatsappNumber}`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white px-6 py-3.5 text-lg font-semibold hover:bg-cta-green-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now – 2 Min Booking
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
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
                Connecting today? Book instantly.
              </p>
              <p className="text-sm text-muted-foreground">
                Most families book via a quick phone call • Available 24/7
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              {/* Main image container */}
              <div className="w-full h-auto relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={imageSrc}
                  alt="Care companion assisting a parent during train/flight interchange"
                  className="w-full h-auto max-w-md lg:max-w-lg object-cover"
                  width={900}
                  height={650}
                  priority
                />

                {/* Trust overlay badge */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
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

              <div className="h-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
