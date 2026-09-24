import { Card, CardContent } from "@/components/Cardnew";
import { Shield, Clock, MapPin, Plane } from "lucide-react";
import type { AirportPickupContent } from "@/data/airportPickupContent";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";

type Props = {
  content: AirportPickupContent;
};

export default function AirportParentPickup({ content }: Props) {
  const whatsappNumber = "919910646415";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Care2Home, I need parent pickup service from ${content.airportFullName}. Please share details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {content.airportBadge}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              {content.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              We meet them at the arrival gate → handle luggage → drop inside
              home safely
              <span className="block mt-2 font-medium text-foreground">
                Live WhatsApp updates at every step.
              </span>
            </p>

            <p className="text-lg text-red-600 font-semibold mb-8">
              No more worrying about late flights, crowds, or long walks...
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground mb-8">
              <span>✔ Arrival Gate Assistance</span>
              <span>✔ Till-Home Responsibility</span>
              <span>{content.coverageChip}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919910646415"
                className="rounded-lg bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition"
              >
                📞 Call Now – 2 Min Booking
              </a>

              <button
                onClick={handleWhatsAppClick}
                className="rounded-lg cursor-pointer border-2 border-accent text-accent px-6 py-3 text-lg font-medium hover:bg-accent/10 transition"
              >
                💬 WhatsApp Us
              </button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Domestic & International flights • Available 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">
                {content.sectionTitle}
              </h2>

              <div className="prose prose-lg max-w-none space-y-5">
                {content.proseParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Care2Home for Airport Pickup?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Plane className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Arrival Gate Meet</h4>
                <p className="text-sm text-gray-600">
                  We receive parents inside the terminal
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Verified Companions</h4>
                <p className="text-sm text-gray-600">
                  Background-checked & trained staff
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">
                  Early morning & late night flights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">{content.ctaTitle}</h2>
        <p className="mb-6">
          Peace of mind from landing to home. Available 24/7.
        </p>

        <a
          href="tel:+919910646415"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
        >
          📞 Call Now – Speak to a Human
        </a>
      </section>
      <section>
        <PricingModel />
      </section>

      <StickyButton buttonTitle={content.stickyButtonTitle} />
    </div>
  );
}
