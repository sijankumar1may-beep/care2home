import Link from "next/link";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/Card";

const FAQ_ITEMS = [
  {
    question: "How does Care2Home work?",
    answer:
      "You share your parent’s travel details—arrival or departure at an airport or railway station anywhere in India (with strong coverage in Delhi NCR), or a home-to-terminal journey—through our booking form or WhatsApp. We assign a trained Care Companion who meets your parent with a name placard, helps with luggage and navigation, stays with them in arranged transport, and remains until they are safely home (or checked in for departure). You receive updates throughout so you always know how the journey is progressing.",
  },
  {
    question: "Are companions verified?",
    answer:
      "Yes. Every Care Companion goes through background verification and training before they represent Care2Home. They carry official ID, and you can speak with them before the trip so your parent knows exactly who to look for.",
  },
  {
    question: "Can you assist at railway stations?",
    answer:
      "Yes. We regularly assist families at major railway stations across India, with our strongest coverage in Delhi NCR—including New Delhi, Old Delhi, Hazrat Nizamuddin, Anand Vihar, Delhi Cantt, Ghaziabad, Delhi Sarai Rohilla, and Jaipur—plus station-to-airport interchange journeys. Your companion meets your parent on the platform or at the agreed exit, helps with bags and crowds, and coordinates a safe ride home.",
  },
  {
    question: "Do you provide wheelchair support?",
    answer:
      "Care Companions help with mobility at a human pace—escorts, luggage, stairs where possible, and coordination with porters or station/airline staff. For wheelchairs and buggies inside terminals or trains, we work alongside official airline and railway assistance where you book those services in advance. Tell us your parent’s mobility needs when you book so we can plan the smoothest handover.",
  },
  {
    question: "Is live tracking available?",
    answer:
      "Yes. Families receive live journey updates—for example when the companion meets your parent, when they are in the vehicle, and when they reach home—so you are not left guessing between “landed” and “safely inside.” Exact channels are confirmed at booking (typically WhatsApp).",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "Care2Home provides parent pickup and companion services across India, with our Delhi NCR hub covering Delhi, NCR, Gurgaon, Noida, Ghaziabad, Faridabad, and Jaipur—including airport and railway coverage in the region. We also serve families at major stations and airports nationwide. If you are unsure whether your route is covered, message us on WhatsApp with your station or terminal and we will confirm quickly.",
  },
] as const;

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.care2home.co/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://www.care2home.co/faq",
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <SEO
        title="FAQ | Care2Home — Airport & Railway Pickup for Elderly Parents | India & Delhi NCR"
        description="Frequently asked questions: how Care2Home works, verified companions, railway station assistance, wheelchair coordination, live journey updates, and cities we serve."
        canonical="https://www.care2home.co/faq"
      />
      <StructuredData id="faq-page-schema" data={faqPageSchema} />
      <StructuredData id="faq-breadcrumb-schema" data={breadcrumbSchema} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-3xl md:mx-8 px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
            Help centre
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Quick answers about parent pickup, verified Care Companions, and
            how we support families across Delhi & NCR. Still unsure?{" "}
            <Link
              href="/contact-us"
              className="text-blue-700 font-semibold hover:underline"
            >
              Contact us
            </Link>{" "}
            or{" "}
            <a
              href="https://wa.me/919910646415?text=Hi%2C%20I%20have%20a%20question%20about%20Care2Home."
              className="text-blue-700 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            .
          </p>

          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question} className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {item.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-14 rounded-xl bg-gray-800 text-white p-8 text-center">
            <p className="text-lg mb-4">
              Ready to book airport or railway pickup for your parent?
            </p>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Book a Care Companion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
