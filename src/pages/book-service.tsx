import { useState, FormEvent, useRef, useEffect } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input, TextArea, Select } from "../components/Input";
import { CheckCircle, Upload, X, MapPin, Loader2 } from "lucide-react";
import Link from "next/link";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import { JourneyPriceBreakdown } from "@/components/JourneyPriceBreakdown";
import type { JourneyPricingResult } from "@/types/pricing";
import {
  buildBookingRecord,
  loadJourneyPricingHandoff,
  resolveJourneyPricingFromHandoff,
  toFirestoreBookingDocId,
} from "@/lib/booking";
import { storage, firestoreDB } from "../../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const LUGGAGE_OPTIONS = Array.from({ length: 5 }, (_, i) => {
  const value = String(i + 1);
  return {
    value,
    label: i === 4 ? ">5" : `${value}`,
  };
});

export default function BookService() {
  const bookingWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.care2home.co/book-service#webpage",
    name: "Book Parent Pickup Service",
    url: "https://www.care2home.co/book-service",
    isPartOf: {
      "@id": "https://www.care2home.co/#website",
    },
    about: {
      "@id": "https://www.care2home.co/#professionalservice",
    },
  };

  const bookingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.care2home.co/book-service#service",
    name: "Parent Pickup Booking Service",
    serviceType: "Elderly parent airport and railway pickup booking",
    provider: {
      "@id": "https://www.care2home.co/#organization",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.care2home.co/book-service",
      availableLanguage: ["en", "hi"],
    },
  };

  const bookingBreadcrumbSchema = {
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
        name: "Book Service",
        item: "https://www.care2home.co/book-service",
      },
    ],
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [ticketImage, setTicketImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [pricing, setPricing] = useState<JourneyPricingResult | null>(null);
  const [journeyOrigin, setJourneyOrigin] = useState<string | null>(null);
  const [journeyDestination, setJourneyDestination] = useState<string | null>(
    null
  );
  const [journeySource, setJourneySource] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
    luggageCount: "",
  });

  useEffect(() => {
    const handoff = loadJourneyPricingHandoff();
    if (!handoff) return;

    setFormData((prev) => ({
      ...prev,
      address: `Pickup: ${handoff.origin}\nDestination: ${handoff.destination}`,
    }));
    setJourneyOrigin(handoff.origin);
    setJourneyDestination(handoff.destination);
    setJourneySource("pricing");

    const resolved = resolveJourneyPricingFromHandoff(handoff);
    if (resolved) {
      setPricing(resolved);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size should be less than 10MB');
        return;
      }
      setTicketImage(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setTicketImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getCurrentAddress = async () => {
    setIsLoadingAddress(true);
    setError("");

    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoadingAddress(false);
      return;
    }

    try {
      // Get current position
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      const { latitude, longitude } = position.coords;

      // Reverse geocode using OpenStreetMap Nominatim API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'Care2Home/1.0', // Required by Nominatim
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }

      const data = await response.json();
      
      // Format the address from the response
      const address = data.display_name || 
        `${data.address?.road || ''} ${data.address?.house_number || ''}, ${data.address?.suburb || data.address?.neighbourhood || ''}, ${data.address?.city || data.address?.town || ''}, ${data.address?.state || ''} ${data.address?.postcode || ''}`.trim();

      if (address) {
        setFormData((prev) => ({ ...prev, address }));
      } else {
        setError("Could not determine address from location");
      }
    } catch (err: any) {
      console.error("Error getting current address:", err);
      if (err.code === 1) {
        setError("Location access denied. Please enable location permissions and try again.");
      } else if (err.code === 2) {
        setError("Location unavailable. Please try again.");
      } else if (err.code === 3) {
        setError("Location request timed out. Please try again.");
      } else {
        setError(err.message || "Failed to get current address. Please enter manually.");
      }
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const uploadImage = async (phone?: string): Promise<string | null> => {
    if (!ticketImage) return null;

    try {
      const fileName = `${Date.now()}-${phone}-${ticketImage.name}`;
      const imageRef = ref(storage, `Care2homeWeb/${fileName}`);
      await uploadBytes(imageRef, ticketImage);
      const imageURL = await getDownloadURL(imageRef);
      return imageURL;
    } catch (err: any) {
      console.error('Upload error:', err);
      throw err;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate required fields
    if (!ticketImage) {
      setError("Please upload a ticket image");
      setIsSubmitting(false);
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter pickup/drop address");
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter phone number");
      setIsSubmitting(false);
      return;
    }

    const luggageCount = Number(formData.luggageCount);
    if (
      formData.luggageCount.trim() === "" ||
      !Number.isInteger(luggageCount) ||
      luggageCount < 1 ||
      luggageCount > 11
    ) {
      setError("Please select number of luggage (1 to 11)");
      setIsSubmitting(false);
      return;
    }

    try {
      const imageUrl = await uploadImage(formData.phone.trim());

      const contact = {
        address: formData.address.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
      };

      const journey = {
        origin: journeyOrigin,
        destination: journeyDestination,
        source: journeySource,
        luggageCount,
      };

      const booking = buildBookingRecord({
        contact,
        ticketImageUrl: imageUrl,
        pricing,
        journey,
      });

      const bookingDocId = toFirestoreBookingDocId(contact.phone)+Math.random().toString(36).substring(2, 15);
      await setDoc(doc(firestoreDB, "Orders", bookingDocId), {
        ...booking,
        createdAt: serverTimestamp(),
      });

      setIsSuccess(true);

      setFormData({
        address: "",
        phone: "",
        email: "",
        luggageCount: "",
      });
      removeImage();
      setPricing(null);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to submit booking. Please try again or contact us on WhatsApp.";
      setError(message);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-check-pop">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2
              className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up"
              style={{ animationDelay: "80ms" }}
            >
              Booking Received!
            </h2>
            <p
              className="text-lg text-gray-600 mb-6 animate-fade-in-up"
              style={{ animationDelay: "140ms" }}
            >
              Thank you for trusting Care2Home. We have received your booking
              request and our team will contact you shortly to confirm the
              details.
            </p>
            <p
              className="text-gray-600 mb-4 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              You will receive a confirmation call within 2 hours. We will share
              your Care Companion&apos;s details before the journey begins.
            </p>
            {whatsappUrl && (
              <p
                className="text-sm text-gray-600 mb-6 animate-fade-in-up"
                style={{ animationDelay: "260ms" }}
              >
                If WhatsApp did not open automatically, tap the button below to
                send your booking details to our team.
              </p>
            )}
            <div
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Open WhatsApp &amp; Send Booking
                </a>
              )}
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  setWhatsappUrl(null);
                }}
                className="w-full sm:w-auto"
              >
                Book Another Journey
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <SEO
        title="Book Parent Pickup Service in India | Elderly Parent Pickup Delhi NCR & Nationwide | Care2Home"
        description="Book elderly parent pickup service across India. Delhi NCR hub with nationwide airport and railway station pickup for elderly parents, senior citizen travel assistance. Quick booking with verified care companions. Book now."
        canonical="https://www.care2home.co/book-service"
      />
      <StructuredData id="booking-webpage-schema" data={bookingWebPageSchema} />
      <StructuredData id="booking-service-schema" data={bookingServiceSchema} />
      <StructuredData
        id="booking-breadcrumb-schema"
        data={bookingBreadcrumbSchema}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Care Service
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Available 24/7 • Airport, Railway & Bus Stand pickups • Across India
            (Delhi NCR hub)
          </p>
          <div className="flex justify-center items-center gap-4 mb-4">
          <Link
                href="/pricing"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 bg-blue-800 text-white text-lg font-medium transition"
              >
                Calculate Your Price
              </Link>
              </div>
          <p className="text-lg text-gray-600">
            Share your parent&apos;s travel details and we&apos;ll take care of
            the rest.
          </p>
        </div>

        {pricing && (
          <div
            className="mb-6 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            <JourneyPriceBreakdown
              pricing={pricing}
              initialDiscountApplied={pricing.discountAmount > 0}
              showDiscountControls={false}
            />
          </div>
        )}

        <div className="animate-scale-in" style={{ animationDelay: "120ms" }}>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ticket Image Upload */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ticket Image <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                {!imagePreview ? (
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 hover:bg-blue-50/40 transition-all duration-200">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 transition-transform duration-200 group-hover:scale-105" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="ticket-image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="ticket-image"
                            ref={fileInputRef}
                            name="ticketImage"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={handleImageChange}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative animate-scale-in">
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                      <img
                        src={imagePreview}
                        alt="Ticket preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 hover:scale-105 transition-all duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Pickup/Drop Address */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "220ms" }}
            >
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pickup/Drop Address <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={getCurrentAddress}
                  disabled={isLoadingAddress}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoadingAddress ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Getting address...</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="w-4 h-4 cursor-pointer" />
                      <span>Use Current Address</span>
                    </>
                  )}
                </button>
              </div>
              <TextArea
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete pickup/drop address with landmark"
                rows={4}
                label=""
              />
            </div>

            {/* Number of luggage */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "280ms" }}
            >
              <Select
                label="Number of Luggage *"
                name="luggageCount"
                required
                value={formData.luggageCount}
                onChange={handleChange}
                options={[
                  { value: "", label: "Select luggage count" },
                  ...LUGGAGE_OPTIONS,
                ]}
              />
              {Number(formData.luggageCount) >= 4 &&
                pricing?.vehicleType === "car" &&
                pricing?.cabType === "5_seater" && (
                  <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4 animate-scale-in">
                    <p className="text-sm text-amber-900">
                      <strong>Suggestion:</strong> With {formData.luggageCount}{" "}
                      bags, a 5-seater may be tight. Please change cab type from
                      5-seater to 7-seater on the pricing page for more luggage
                      space.
                    </p>
                    <Link
                      href="/pricing"
                      className="mt-2 inline-block text-sm font-semibold text-amber-800 underline hover:text-amber-950 transition-colors"
                    >
                      Go to Pricing to change cab type
                    </Link>
                  </div>
                )}
            </div>

            {/* Phone Number */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "340ms" }}
            >
              <Input
                label="Phone Number *"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            {/* Email (Optional) */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Input
                label="Email (Optional)"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-scale-in">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in-up"
              style={{ animationDelay: "460ms" }}
            >
              <p className="text-xs text-gray-600 text-center mb-2">
                All Care Companions are background-verified and trained to assist elderly parents
              </p>
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This is a booking request. Our team will
                call you within 2 hours to confirm details and payment. No
                payment is required now.
              </p>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "520ms" }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full hover:-translate-y-0.5 transition-all duration-200"
                size="lg"
              >
                {isSubmitting
                  ? "Uploading & Submitting Request..."
                  : "Submit Request • We'll Call You"}
              </Button>
            </div>
          </form>
          </Card>
        </div>

        <div
          className="mt-8 text-center animate-fade-in-up"
          style={{ animationDelay: "580ms" }}
        >
          <p className="text-xs text-gray-600 mt-3 text-center">
            Prefer talking first? <Link href="tel:+919910646415" className="underline">Call us </Link> or <Link className="underline" href="https://wa.me/919910646415?text=Hi%20Care2Home%20Team">WhatsApp us</Link> anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
