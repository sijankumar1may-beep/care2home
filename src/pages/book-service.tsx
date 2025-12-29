import { useState, FormEvent } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input, TextArea, Select } from "../components/Input";
import { CheckCircle } from "lucide-react";
import SEO from "@/components/Seo";

export default function BookService() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    parentName: "",
    arrivalType: "Airport",
    flightTrainNumber: "",
    arrivalDate: "",
    arrivalTime: "",
    homeAddress: "",
    specialNeeds: "",
    emergencyContact: "",
    bookingEmail: "",
    bookingPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const WHATSAPP_NUMBER = "919910646415";
  const sendToWhatsApp = () => {
    const message = `
  🟢 *New Care2Home Booking Request*
  
  👴 Parent Name: ${formData.parentName}
  🚏 Arrival Type: ${formData.arrivalType}
  ✈️/🚆 Flight/Train No: ${formData.flightTrainNumber}
  📅 Arrival Date: ${formData.arrivalDate}
  ⏰ Arrival Time: ${formData.arrivalTime}
  
  🏠 Home Address:
  ${formData.homeAddress}
  
  🩺 Special Needs:
  ${formData.specialNeeds || "None"}
  
  📞 Booking Phone: ${formData.bookingPhone}
  📧 Email: ${formData.bookingEmail || "Not provided"}
  🚨 Emergency Contact: ${formData.emergencyContact}
  `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      sendToWhatsApp(); // 👈 SEND TO WHATSAPP

      setIsSuccess(true);

      setFormData({
        parentName: "",
        arrivalType: "Airport",
        flightTrainNumber: "",
        arrivalDate: "",
        arrivalTime: "",
        homeAddress: "",
        specialNeeds: "",
        emergencyContact: "",
        bookingEmail: "",
        bookingPhone: "",
      });
    } catch (err) {
      setError(
        "Unable to send booking details. Please contact us on WhatsApp."
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <SEO
          title="Book Parent Pickup & Assisted Travel Care | Care2Home"
          description="Book safe pickup, drop, and assisted travel care for parents and elderly family members with Care2Home. Verified care companions, doorstep pickup, and reliable support you can trust."
          canonical="https://www.care2home.co/book-service"
        />

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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Care Service
          </h1>
          <p className="text-lg text-gray-600">
            Share your parent&apos;s travel details and we&apos;ll take care of
            the rest.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Parent&apos;s Information
              </h3>
              <Input
                label="Parent's Name"
                name="parentName"
                type="text"
                required
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter parent's full name"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Travel Details
              </h3>
              <div className="space-y-4">
                <Select
                  label="Arrival Type"
                  name="arrivalType"
                  required
                  value={formData.arrivalType}
                  onChange={handleChange}
                  options={[
                    { value: "Airport", label: "Airport" },
                    { value: "Railway", label: "Railway Station" },
                  ]}
                />

                <Input
                  label={
                    formData.arrivalType === "Airport"
                      ? "Flight Number"
                      : "Train Number"
                  }
                  name="flightTrainNumber"
                  type="text"
                  required
                  value={formData.flightTrainNumber}
                  onChange={handleChange}
                  placeholder={
                    formData.arrivalType === "Airport"
                      ? "e.g., AI 101"
                      : "e.g., 12345"
                  }
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Arrival Date"
                    name="arrivalDate"
                    type="date"
                    required
                    value={formData.arrivalDate}
                    onChange={handleChange}
                  />

                  <Input
                    label="Arrival Time"
                    name="arrivalTime"
                    type="time"
                    required
                    value={formData.arrivalTime}
                    onChange={handleChange}
                  />
                </div>

                <TextArea
                  label="Home Address"
                  name="homeAddress"
                  required
                  value={formData.homeAddress}
                  onChange={handleChange}
                  placeholder="Enter complete home address with landmark"
                  rows={3}
                />

                <TextArea
                  label="Special Needs (Optional)"
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleChange}
                  placeholder="Any mobility issues, health considerations, or specific requirements"
                  rows={3}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <Input
                  label="Your Phone Number"
                  name="bookingPhone"
                  type="tel"
                  required
                  value={formData.bookingPhone}
                  onChange={handleChange}
                  placeholder="For booking confirmation and updates"
                />

                <Input
                  label="Your Email (Optional)"
                  name="bookingEmail"
                  type="email"
                  value={formData.bookingEmail}
                  onChange={handleChange}
                  placeholder="For booking confirmation"
                />

                <Input
                  label="Emergency Contact"
                  name="emergencyContact"
                  type="tel"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  placeholder="Alternate contact number"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
              {isSubmitting ? "Redirecting to WhatsApp..." : "Submit & Send to WhatsApp"}
            </Button>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need help? Contact us on WhatsApp for immediate assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
