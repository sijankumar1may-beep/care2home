import Link from "next/link";
import { Star } from "lucide-react";
import { ReviewCard } from "@/components/ReviewCard";
import {
  getAggregateRating,
  getFeaturedReviews,
} from "@/data/reviews";

export default function ReviewsPreview() {
  const featuredReviews = getFeaturedReviews(3);
  const { ratingValue, reviewCount } = getAggregateRating();

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          What families say
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-2xl mx-auto leading-relaxed">
          Families across India trust Care2Home for safe parent travel—with
          strong coverage in Delhi NCR.
        </p>
        <p className="text-center text-sm text-gray-500 mb-12 flex items-center justify-center gap-1.5">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden />
          <span>
            {ratingValue} average · {reviewCount} reviews
          </span>
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-700 text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 transition"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
