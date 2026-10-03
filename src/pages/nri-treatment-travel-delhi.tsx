"use client";

import Link from "next/link";
import { Building2, CheckCircle, Globe, MapPin, Phone, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/Cardnew";
import StickyButton from "../components/StickyButton";
import PricingModel from "../components/PricingModel";
import SEO from "@/components/Seo";

const whatsappNumber = "919910646415";
const whatsappMessage = encodeURIComponent(
  "Hi Care2Home, I am an NRI traveling to Delhi NCR for treatment. I need arrival assistance and a hospital drop. Please share details."
);

export default function NriTreatmentTravelDelhi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO
        title="NRI Treatment Travel in Delhi NCR | Airport to Hospital Assistance | Care2Home"
        description="NRIs traveling to Delhi NCR for treatment can book a Care2Home companion for IGI or Jewar arrival, hospital drop at any Delhi NCR hospital, return transfer, and WhatsApp updates for family abroad."
        canonical="https://www.care2home.co/nri-treatment-travel-delhi"
      />

      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <Globe className="h-4 w-4" />
            NRI treatment travel
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Traveling to Delhi NCR for treatment
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Book before you fly. A Care2Home companion meets you at the airport, helps with luggage and mobility, and takes you to the Delhi NCR hospital you have chosen. Family abroad can follow the journey on WhatsApp.
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
                Arrival support for NRIs coming to Delhi NCR for treatment
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                <p>
                  Arriving in Delhi NCR for hospital care is easier when someone is already waiting. Care2Home is for NRIs traveling to Delhi NCR for treatment at any hospital in the region. Share your flight details and hospital name before you leave, and a companion will be at the arrival point.
                </p>
                <p>
                  We meet you at <strong>IGI Airport</strong> or <strong>Noida Jewar Airport</strong>, help with luggage and mobility, and go with you to the hospital. If you arrive by train, the same support is available from Delhi NCR railway stations. On the way back, you can book a return trip from the hospital to the airport or railway station.
                </p>
                <p>
                  WhatsApp updates go to you and to family in another time zone, so people at home know when you have landed and when you have reached the hospital. This is travel assistance only. Care2Home does not arrange medical treatment or hospital admission.
                </p>
                <p>
                  For a general airport or station drop at a Delhi NCR hospital, see{" "}
                  <Link href="/delhi-hospital-transfer" className="font-semibold text-blue-800 underline">
                    hospital transfer assistance
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
          <h3 className="mb-8 text-center text-2xl font-bold">How NRI treatment travel works</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Book from overseas</h4>
                <p className="text-sm text-gray-600">
                  Call or WhatsApp with your flight, arrival time, hospital name, and a family contact before you travel.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Meet and hospital drop</h4>
                <p className="text-sm text-gray-600">
                  Your companion meets you with a name placard at IGI or Jewar and travels with you to the Delhi NCR hospital.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-2 font-semibold">Return when you are ready</h4>
                <p className="text-sm text-gray-600">
                  Book a later trip from the hospital back to the airport or railway station for your onward journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-2xl font-bold">What families abroad can expect</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">Time-zone updates</h4>
                <p className="text-sm text-gray-600">
                  WhatsApp messages mark meeting, departure from the airport, and arrival at the hospital.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">Any Delhi NCR hospital</h4>
                <p className="text-sm text-gray-600">
                  Name the hospital when you book. The companion drops you there and confirms arrival.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-semibold">A person on the phone</h4>
                <p className="text-sm text-gray-600">
                  Book on a call or WhatsApp. Share one set of travel details and we coordinate the rest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Book before your flight to Delhi NCR</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Share your arrival and the hospital. We confirm a companion so someone is waiting when you land.
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

      <StickyButton buttonTitle="Call Now | NRI Treatment Travel | 24/7" />
    </div>
  );
}
