import { Card } from "../components/Card";
import Link from "next/link";
import ServiceStations from "@/components/ServingStations";
import ServiceAirport from "@/components/ServingAirport";
import ProvingTourPackages from "@/components/ProvingTourPackages";
import DifferentTypesOfServices from "@/components/DifferentTypesOfServices";
import {
  MessageCircle,
  Home as HomeIcon,
  Heart,
  UserCheck,
  Bell,
} from "lucide-react";
import Safetyandtrust from "../components/safetyandtrust";
import AsSeenOn from "@/components/AsSeenOn";
import HeroBanner from "@/components/HeroBanner";
import PricingModel from "@/components/PricingModel";
import ReviewsPreview from "@/components/ReviewsPreview";
import RevealOnScroll from "@/components/RevealOnScroll";
import SEO from "@/components/Seo";
import StickyButton from "@/components/StickyButton";
import StructuredData from "@/components/StructuredData";
import {
  howItWorksVideo,
  parentsTravelingAloneVideo,
} from "@/lib/home-videos";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.care2home.co/#parent-pickup-service",
    name: "Elderly Parent Pickup Service",
    description:
      "Airport pickup for elderly parents, railway station pickup for senior citizens, and elderly travel assistance in Delhi NCR and across India. Parent companion service with senior citizen airport assistance—a safe pickup service for parents nationwide.",
    serviceType:
      "Airport pickup for elderly parents; railway station pickup for senior citizens; parent companion service; senior citizen airport assistance",
    provider: {
      "@type": "Organization",
      "@id": "https://www.care2home.co/#organization",
      name: "Care2Home",
      url: "https://www.care2home.co/",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Delhi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    audience: {
      "@type": "PeopleAudience",
      suggestedAge: "60+",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.care2home.co/book-service",
      availableLanguage: ["en", "hi"],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.care2home.co/pricing",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO
        title="Airport Pickup for Elderly Parents in India | Delhi NCR & Nationwide Railway Station Assistance | Care2Home"
        description="Parent companion service across India with strong coverage in Delhi NCR: airport pickup for elderly parents, railway station pickup for senior citizens, senior citizen airport assistance, and elderly travel assistance nationwide. Verified Care Companions, live updates. Book Care2Home."
        canonical="https://www.care2home.co/"
      />
      <StructuredData id="home-service-schema" data={homePageSchema} />

      <HeroBanner />
      <RevealOnScroll>
        <section className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Parents Traveling Alone? We ensure they reach home safely with our
            Care Companion.
          </h2>
          <iframe
            src={parentsTravelingAloneVideo.embedSrc}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-140"
          />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <ReviewsPreview />
      </RevealOnScroll>

      <section className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How it works
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          <RevealOnScroll delayMs={0}>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Book a Care Companion
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your parent&apos;s travel details through our simple form
                  or WhatsApp. We&apos;ll confirm the booking within minutes.
                </p>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Companion meets your parent
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our verified Care Companion arrives at the airport or railway
                  station or bus stop with a name placard, ready to assist.
                </p>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delayMs={160}>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Safe Travel Home
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your parent travels comfortably with live location updates sent
                  to you. Our companion ensures they reach home safely.
                </p>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
        <RevealOnScroll className="mt-10" delayMs={80}>
          <iframe
            className="w-full h-140"
            src={howItWorksVideo.embedSrc}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </RevealOnScroll>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why not just book a cab?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={60}>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A cab drops your parent at the gate. Our Care Companion ensures
              they&apos;re safe until they&apos;re home—whether you need airport
              pickup for elderly parents, railway station pickup for senior
              citizens, or ongoing elderly travel assistance across India—with
              strong coverage in Delhi NCR.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealOnScroll delayMs={0}>
              <Card className="border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <UserCheck className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Human Responsibility
                    </h3>
                    <p className="text-gray-600">
                      Someone who cares, not just a driver. Your parent has a
                      dedicated companion throughout.
                    </p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={80}>
              <Card className="border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <HomeIcon className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Till Home, Not Till Gate
                    </h3>
                    <p className="text-gray-600">
                      We help with luggage, stairs, and ensure they&apos;re safely
                      inside before we leave.
                    </p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={160}>
              <Card className="border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <Bell className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      You Stay Informed
                    </h3>
                    <p className="text-gray-600">
                      Live updates at every step. No more anxiety wondering if
                      they reached safely.
                    </p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={240}>
              <Card className="border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Peace of Mind
                    </h3>
                    <p className="text-gray-600">
                      Focus on your work knowing your parent has someone looking
                      after them.
                    </p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
        <RevealOnScroll delayMs={80}>
          <p className="text-center text-muted-foreground mt-10 max-w-lg mx-auto">
            A cab driver&apos;s job ends at the door. A{" "}
            <strong className="text-care-trust">Care Companion</strong> ensures
            your parent is safely home.
          </p>
        </RevealOnScroll>
      </section>

      <RevealOnScroll>
        <Safetyandtrust />
      </RevealOnScroll>
      <RevealOnScroll>
        <AsSeenOn />
      </RevealOnScroll>
      <RevealOnScroll>
        <DifferentTypesOfServices />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServiceStations />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServiceAirport />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProvingTourPackages />
      </RevealOnScroll>
      <RevealOnScroll>
        <PricingModel />
      </RevealOnScroll>

      <section className="lg:px-8 py-16">
        <RevealOnScroll animation="scale">
          <Card className=" bg-gray-300 text-black text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to ensure safe travel for your parents?
            </h2>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Book a Care Companion today, or talk to us on WhatsApp to know more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex justify-center">
                <Link
                  href={`https://wa.me/919910646415?text=Hi%20I%20need%20parent%20pickup%20service`}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-green-600 text-white text-lg font-medium hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk on WhatsApp
                </Link>
              </div>
              <Link
                href="/book-service"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg text-black border-2 border-black text-lg font-medium hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                Book Now
              </Link>
            </div>
          </Card>
        </RevealOnScroll>
      </section>
      <StickyButton buttonTitle={`📞 Call Now — Parent Pickup | 24/7`} />
    </div>
  );
}
