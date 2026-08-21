export interface CustomerReview {
  id: string;
  rating: number;
  quote: string;
  authorName: string;
  authorRole?: string;
  city?: string;
  serviceType?: string;
  datePublished: string;
  featured?: boolean;
}

const reviews: CustomerReview[] = [
  {
    id: "review-1",
    rating: 5,
    quote:
      "My mother arrived at IGI Terminal 3 late at night. The Care Companion met her with a placard, helped with luggage, and stayed until she was safely inside our home in Noida. WhatsApp updates throughout—I could focus on my meeting instead of worrying.",
    authorName: "Priya S.",
    authorRole: "Daughter",
    city: "Noida",
    serviceType: "IGI Airport pickup",
    datePublished: "2026-08-05",
    featured: true,
  },
  {
    id: "review-2",
    rating: 5,
    quote:
      "Father travels alone from Kolkata every few months. Care2Home has become our default for New Delhi Railway Station pickups. The companion knows the station exits and coordinates with our driver smoothly.",
    authorName: "Amit K.",
    authorRole: "Son",
    city: "Delhi",
    serviceType: "New Delhi Railway Station pickup",
    datePublished: "2026-07-18",
    featured: true,
  },
  {
    id: "review-3",
    rating: 5,
    quote:
      "We live in the US and could not be at the airport when my parents landed. Live updates on WhatsApp were a relief. They reached Gurgaon safely with help up to the apartment.",
    authorName: "Neha & Raj",
    authorRole: "NRI family",
    city: "Gurgaon",
    serviceType: "Airport pickup",
    datePublished: "2026-06-22",
    featured: true,
  },
  {
    id: "review-4",
    rating: 4,
    quote:
      "Used interchange service when my mother had a train-to-flight connection at Hazrat Nizamuddin. One companion handled both legs—much less stress than coordinating two separate pickups.",
    authorName: "Suresh M.",
    authorRole: "Son",
    city: "Faridabad",
    serviceType: "Interchange service",
    datePublished: "2026-05-10",
  },
  {
    id: "review-5",
    rating: 5,
    quote:
      "Professional, patient, and respectful with my elderly father. He has mobility issues and the companion did not rush him through the station crowds.",
    authorName: "Anita R.",
    authorRole: "Daughter",
    city: "Ghaziabad",
    serviceType: "Anand Vihar Railway Station pickup",
    datePublished: "2026-04-12",
  },
  {
    id: "review-6",
    rating: 5,
    quote:
      "Booked via WhatsApp in the morning for an evening arrival. Quick confirmation and clear communication about who would meet my mother and where.",
    authorName: "Vikram P.",
    authorRole: "Son",
    city: "Jaipur",
    serviceType: "Railway station pickup",
    datePublished: "2026-03-14",
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = reviews;

export function getFeaturedReviews(limit = 3): CustomerReview[] {
  const featured = reviews.filter((r) => r.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return reviews.slice(0, limit);
}

export function getAggregateRating(): {
  ratingValue: string;
  reviewCount: string;
} {
  if (reviews.length === 0) {
    return { ratingValue: "0", reviewCount: "0" };
  }
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const average = sum / reviews.length;
  return {
    ratingValue: average.toFixed(1),
    reviewCount: String(reviews.length),
  };
}
