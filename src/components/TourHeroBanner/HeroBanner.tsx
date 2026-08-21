"use client";

import { MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Image from "next/image";


const HeroSection = () => {
  const trustPoints = [
    "Verified Care Companions",
    "Wheelchair Assistance",
    "Safe & Relaxed Travel",
  ];

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-10">
      <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        
        {/* Location Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Delhi Elder Tour Package
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Want Your Parents to Explore Delhi Safely?
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="font-medium">
                We pick your parents from home, assist them throughout the journey,
                and help them explore Delhi’s top historical places comfortably
              </span>
              <span className="block mt-2 font-medium text-green-700">
                Wheelchair support, trained companion, and full-day assistance included.
              </span>
              <span className="block mt-2 text-foreground">
                Live WhatsApp updates for complete peace of mind.
              </span>
            </p>

            {/* Trust bullets */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground mb-8">
              {trustPoints.map((point, index) => (
                <span key={index} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {point}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="tel:+919910646415"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta-green text-white px-6 py-3.5 text-lg font-semibold hover:bg-cta-green-hover transition"
              >
                <Phone className="w-5 h-5" />
                Call Now – Book Tour
              </a>

              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20want%20to%20book%20Delhi%20Elder%20Tour%20for%20my%20parent.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent text-accent bg-white px-6 py-3.5 text-lg font-medium hover:bg-accent/10 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Micro reassurance */}
            <div className="mt-6 space-y-1">
              {/* <p className="text-sm font-medium text-foreground">
                Same-day bookings available
              </p> */}
              <p className="text-sm text-muted-foreground">
                Trusted by families across India • Delhi NCR hub • Available 24/7
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              
              <div className="w-full h-auto relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/delhi-elder-tour.png" // 👉 replace with your tour image
                  alt="Elderly parents enjoying Delhi tour with assistance"
                  className="w-full h-auto max-w-md lg:max-w-lg object-cover"
                  width={900}
                  height={650}
                />

                {/* Trust badge */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-sm font-semibold text-primary">
                    Safe & Assisted Travel
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Designed specially for elderly parents
                  </p>
                </div>
              </div>

              <div className="h-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;