import { useState, FormEvent, useRef } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input, TextArea } from "../components/Input";
import { CheckCircle, Upload, X, MapPin, Loader2 } from "lucide-react";
import Link from "next/link";
import SEO from "@/components/Seo";

export default function BookService() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [ticketImage, setTicketImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    setUploadedImageUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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

  const uploadImage = async (): Promise<string | null> => {
    if (!ticketImage) return null;

    const formData = new FormData();
    formData.append('ticketImage', ticketImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }

      const data = await response.json();
      return data.imageUrl;
    } catch (err: any) {
      console.error('Upload error:', err);
      throw err;
    }
  };

  const WHATSAPP_NUMBER = "919910646415";
  const sendToWhatsApp = (imageUrl: string | null) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.care2home.co';
    const fullImageUrl = imageUrl ? `${baseUrl}${imageUrl}` : 'Not provided';
    
    const message = `
🟢 *New Care2Home Booking Request*

📋 *Booking Details:*

📸 *Ticket Image:* ${fullImageUrl}

📍 *Pickup/Drop Address:*
${formData.address}

📞 *Phone Number:* ${formData.phone}

📧 *Email:* ${formData.email || "Not provided"}

---
*Thank you for choosing Care2Home!*
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
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

    try {
      // Upload image first
      const imageUrl = await uploadImage();
      setUploadedImageUrl(imageUrl);

      // Send to WhatsApp
      sendToWhatsApp(imageUrl);

      setIsSuccess(true);

      // Reset form
      setFormData({
        address: "",
        phone: "",
        email: "",
      });
      removeImage();
    } catch (err: any) {
      setError(
        err.message || "Unable to upload image. Please try again or contact us on WhatsApp."
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Received!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for trusting Care2Home. We have received your booking
              request and our team will contact you shortly to confirm the
              details.
            </p>
            <p className="text-gray-600 mb-8">
              You will receive a confirmation call within 2 hours. We will share
              your Care Companion&apos;s details before the journey begins.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => setIsSuccess(false)}
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
        title="Book Parent Pickup Service | Elderly Parent Pickup Booking Delhi | Railway Station Airport Pickup | Care2Home"
        description="Book elderly parent pickup service Delhi. Book parent pickup railway station, airport pickup for elderly parents, senior citizen travel assistance. Quick booking with verified care companions. Book now."
        canonical="https://www.care2home.co/book-service"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Care Service
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Available 24/7 • Airport, Railway & Bus Stand pickups • Delhi NCR
          </p>
          <p className="text-lg text-gray-600">
            Share your parent&apos;s travel details and we&apos;ll take care of
            the rest.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ticket Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ticket Image <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                {!imagePreview ? (
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
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
                  <div className="relative">
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
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Pickup/Drop Address */}
            <div>
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

            {/* Phone Number */}
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

            {/* Email (Optional) */}
            <Input
              label="Email (Optional)"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-gray-600 text-center mb-2">
                All Care Companions are background-verified and trained to assist elderly parents
              </p>
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This is a booking request. Our team will
                call you within 2 hours to confirm details and payment. No
                payment is required now.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting
                ? "Uploading & Redirecting to WhatsApp..."
                : "Submit Request • We'll Call You"}
            </Button>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 mt-3 text-center">
            Prefer talking first? <Link href="tel:+919910646415" className="underline">Call us </Link> or <Link className="underline" href="https://wa.me/919910646415?text=Hi%20Care2Home%20Team">WhatsApp us</Link> anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
