import { Star } from "lucide-react";
import { Card } from "@/components/Card";
import type { CustomerReview } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-gray-300 fill-gray-300"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

export function ReviewCard({ review }: { review: CustomerReview }) {
  const authorParts = [
    review.authorName,
    review.authorRole,
    review.city,
  ].filter(Boolean);

  return (
    <Card className="p-6 md:p-8 h-full flex flex-col">
      <StarRating rating={review.rating} />
      <blockquote className="mt-4 text-gray-700 leading-relaxed flex-grow">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{authorParts.join(" · ")}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-500">
          {review.serviceType && (
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-medium">
              {review.serviceType}
            </span>
          )}
          <time dateTime={review.datePublished}>
            {formatReviewDate(review.datePublished)}
          </time>
        </div>
      </footer>
    </Card>
  );
}
