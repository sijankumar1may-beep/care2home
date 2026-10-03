"use client";

import Link from "next/link";
import { Building2, CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/Cardnew";
import StickyButton from "../components/StickyButton";
import PricingModel from "../components/PricingModel";
import SEO from "@/components/Seo";

const whatsappNumber = "919910646415";
const whatsappMessage = encodeURIComponent(
  "Hi Care2Home, I need assistance from an airport or railway station to a hospital in Delhi NCR. Please share details."
);

export default function DelhiHospitalTransfer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO
        title="Airport & Railway to Hospital Assistance in Delhi NCR | Care2Home"
        description="Care2Home companions meet you at IGI Airport, Jewar Airport, or Delhi NCR railway stations and assist you to any hospital in Delhi NCR, with luggage help and WhatsApp updates."
        canonical="https://www.care2home.co/delhi-hospital-transfer"
      />

      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <MapPin className="h-4 w-4" />
            Delhi NCR hospital transfer
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            From the airport or station to the hospital in Delhi NCR
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A verified Care2Home companion meets the passenger at IGI Airport, Noida Jewar Airport, or a Delhi NCR railway station, helps with luggage and mobility, and stays with them until they reach the hospital.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-accent bg-white px-6 py-3.5 text-lg font-semibold text-accent hover:bg-accent/10"
            >
              WhatsApp booking
            </a>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl bg-blue-800 px-6 py-3.5 text-lg font-semibold text-white hover:bg-blue-900"
            >
              Book service
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg hover:bg-green-700"
            >
              Calculate Your Price
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Airport and railway assistance to hospitals in Delhi NCR
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                <p>
                  Families often need someone waiting when a parent, patient, or relative lands in Delhi NCR and has to reach a hospital. Care2Home provides that travel support. A companion meets them with a name placard, helps with luggage, walking, or a wheelchair, and travels with them to the hospital named at booking.
                </p>
                <p>
                  Pickup points include <strong>IGI Airport</strong> (including Terminal 3), <strong>Noida Jewar Airport</strong>, and Delhi NCR railway stations: New Delhi, Old Delhi, Delhi Cantt, Hazrat Nizamuddin, Anand Vihar, Delhi Sarai Rohilla, and nearby Ghaziabad. The drop can be any hospital in Delhi NCR the family shares when they book.
                </p>
                <p>
                  This is companion travel assistance. We do not provide medical treatment. The companion confirms arrival at the hospital on WhatsApp so family members know the passenger has reached safely.
                </p>
                <p>
                  If you are an NRI coming to Delhi NCR for treatment, see our{" "}
                  <Link href="/nri-treatment-travel-delhi" className="font-semibold text-blue-800 underline">
                    NRI treatment travel page
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl font-bold">How hospital transfer works</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Share the journey</h4>
                <p className="text-sm text-gray-600">
                  Send the flight or train details, arrival time, passenger name, mobility needs, and the Delhi NCR hospital name.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Meet on arrival</h4>
                <p className="text-sm text-gray-600">
                  The companion waits with a name placard, helps through the terminal or station, and assists with luggage or a wheelchair.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Reach the hospital</h4>
                <p className="text-sm text-gray-600">
                  They travel together to the hospital. You get a WhatsApp update when the passenger has arrived.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl font-bold">What is included</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">Verified companion</h4>
                <p className="text-sm text-gray-600">
                  Background-verified Care2Home companions trained to assist elderly and mobility-limited travellers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">Delays covered</h4>
                <p className="text-sm text-gray-600">
                  Late flights, changed platforms, and waiting time are coordinated so the passenger is not left alone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">Live updates</h4>
                <p className="text-sm text-gray-600">
                  Family members receive WhatsApp updates from meeting point through hospital arrival.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Book hospital transfer assistance</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Tell us the airport or station, the passenger details, and the hospital in Delhi NCR. We confirm the companion and stay in touch until arrival.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919910646415"
              className="inline-block rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white"
            >
              Call +91 99106 46415
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border-2 border-blue-800 px-8 py-3 text-lg font-semibold text-blue-800"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section>
        <PricingModel />
      </section>

      <StickyButton buttonTitle="Call Now | Hospital Transfer | 24/7" />
    </div>
  );
}
