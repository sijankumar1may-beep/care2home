import Link from "next/link";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import { ReviewCard } from "@/components/ReviewCard";
import {
  CUSTOMER_REVIEWS,
  getAggregateRating,
} from "@/data/reviews";

const { ratingValue, reviewCount } = getAggregateRating();

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
      name: "Reviews",
      item: "https://www.care2home.co/reviews",
    },
  ],
};

const reviewsOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.care2home.co/#organization",
  name: "Care2Home",
  url: "https://www.care2home.co/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
  review: CUSTOMER_REVIEWS.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.authorName,
    },
    datePublished: review.datePublished,
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
      worstRating: "1",
    },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Customer Reviews | Care2Home Parent Pickup Service | India & Delhi NCR"
        description="Read what families say about Care2Home: airport and railway station pickup for elderly parents, verified Care Companions, and live journey updates across India."
        canonical="https://www.care2home.co/reviews"
      />
      <StructuredData id="reviews-breadcrumb-schema" data={breadcrumbSchema} />
      <StructuredData
        id="reviews-organization-schema"
        data={reviewsOrganizationSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-5xl md:mx-8 px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What families say
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl">
            Real feedback from families who booked Care Companions for airport
            pickup, railway station assistance, and interchange journeys across
            India—with strong coverage in Delhi NCR.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            {ratingValue} average · {reviewCount} reviews
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {CUSTOMER_REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-14 rounded-xl bg-gray-800 text-white p-8 text-center">
            <p className="text-lg mb-4">
              Ready to book airport or railway pickup for your parent?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
              >
                Book a Care Companion
              </Link>
              <a
                href="https://wa.me/919910646415?text=Hi%2C%20I%20would%20like%20to%20book%20parent%20pickup%20service."
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk on WhatsApp
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calculate Your Price
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
