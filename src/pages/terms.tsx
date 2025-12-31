import { Card } from "../components/Card";
import { Shield, AlertCircle, Heart, UserCheck, PhoneIcon } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";
import SEO from "@/components/Seo";
export default function TermsAndSafety() {
  const whatsappLink =
    "https://wa.me/919910646415?text=Hi%2C%20I%20have%20a%20question%20about%20Care2Home%20services";
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <SEO
        title="Terms & Conditions - Care2Home Parent Care Services | Care2home"
        description="Read Care2Home’s terms and conditions for booking pickup, drop, and assisted travel services for parents. Clear policies on usage, responsibilities, and service guidelines."
        canonical="https://www.care2home.co/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms & Safety
          </h1>
          <p className="text-lg text-gray-600">
            Your trust matters to us. Here&apos;s everything you need to know
            about our service.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Service Scope
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Care2Home is a{" "}
                <strong>non-medical travel assistance service</strong>. We
                provide trained Care Companions to ensure your parents travel
                safely from airport or railway station to their home.
              </p>
              <p>
                <strong>What we provide:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Meet and greet at arrival point</li>
                <li>Luggage assistance</li>
                <li>Safe transportation arrangement</li>
                <li>Companionship throughout the journey</li>
                <li>Assistance till inside the home</li>
                <li>Real-time updates to family members</li>
              </ul>
              <p className="mt-4">
                <strong>What we don&apos;t provide:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Medical care or nursing services</li>
                <li>Medication administration</li>
                <li>Treatment of health emergencies</li>
                <li>Long-term care or personal care services</li>
              </ul>
              <p className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <strong>Important:</strong> If your parent requires medical
                assistance during travel, please inform us in advance. We
                recommend consulting with healthcare professionals for medical
                travel arrangements.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Transport & Safety
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Transport Mode Decision:</strong>
              </p>
              <p>
                Our Care Companions select the most appropriate mode of
                transport based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Distance to home</li>
                <li>Time of day and traffic conditions</li>
                <li>Your parent&apos;s comfort and mobility needs</li>
                <li>Safety considerations</li>
                <li>Weather conditions</li>
              </ul>
              <p className="mt-4">
                Options may include taxi, app-based cab, metro, or other public
                transport. The decision prioritizes your parent&apos;s safety
                and comfort above all.
              </p>
              <p className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <strong>Premium Transport:</strong> If you&apos;ve chosen
                Comfort Care, we ensure premium, comfortable vehicle transport
                for the entire journey.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <UserCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Care Companion Responsibilities
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Our Care Companions are trained to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Meet your parent at the designated arrival point with proper
                  identification
                </li>
                <li>
                  Assist with luggage and belongings throughout the journey
                </li>
                <li>
                  Ensure comfortable and safe travel at a pace suitable for your
                  parent
                </li>
                <li>Maintain respectful, patient, and caring communication</li>
                <li>Keep you updated at key milestones during the journey</li>
                <li>
                  Ensure your parent is safely inside their home before
                  departing
                </li>
                <li>Handle any reasonable requests with dignity and care</li>
              </ul>
              <p className="mt-4">
                <strong>Background Verification:</strong>
              </p>
              <p>
                Every Care Companion undergoes thorough background verification
                including police verification, reference checks, and training in
                senior care and safety protocols.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Heart className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Emergency Handling
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Medical Emergencies:</strong>
              </p>
              <p>In case of any medical emergency during the journey:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Our Care Companion will immediately contact emergency services
                </li>
                <li>You will be notified immediately</li>
                <li>
                  The Companion will stay with your parent until you or medical
                  professionals arrive
                </li>
                <li>
                  We maintain a 24/7 emergency support line for such situations
                </li>
              </ul>
              <p className="mt-4">
                <strong>Travel Delays or Changes:</strong>
              </p>
              <p>
                If flights or trains are delayed, our team monitors the schedule
                and adjusts accordingly. The Care Companion will wait for your
                parent&apos;s actual arrival time at no extra charge for delays
                up to 2 hours.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Payment & Cancellation
              </h2>
              <p>
                <strong>Payment:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Payment is required after booking confirmation and before
                  service date
                </li>
                <li>We accept all major payment methods</li>
                <li>Transport costs are included in the service fee</li>
                <li>No hidden charges</li>
              </ul>
              <p className="mt-4">
                <strong>Cancellation:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Free cancellation up to 24 hours before scheduled service
                </li>
                <li>50% refund for cancellations within 24 hours</li>
                <li>
                  No refund for cancellations within 2 hours of scheduled pickup
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy & Data Protection
              </h2>
              <p>We respect your privacy and protect your data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All personal information is kept confidential</li>
                <li>
                  Data is used only for service delivery and communication
                </li>
                <li>
                  We never share your information with third parties without
                  consent
                </li>
                <li>
                  Care Companions have access only to necessary information for
                  the journey
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Liability Disclaimer
              </h2>
              <p>While we take every precaution to ensure safety:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Care2Home is not liable for pre-existing medical conditions
                </li>
                <li>
                  We are not responsible for loss or damage to personal
                  belongings
                </li>
                <li>Our liability is limited to the service fee paid</li>
                <li>
                  We recommend travel insurance for comprehensive coverage
                </li>
              </ul>
              <p className="mt-4">
                Our Care Companions act with reasonable care and diligence.
                However, accidents beyond reasonable control are not our
                responsibility.
              </p>
            </div>
          </Card>

          <div className="p-6 md:p-8 rounded-xl bg-care-warm border border-border text-center">
            <h3 className="text-lg font-semibold text-care-trust mb-2">
              Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              We are happy to clarify any concerns before you book.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </Button>
              <Button>
                <Link href="/book-service">Book a Care Companion</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Last updated: December 2025</p>
      </div>
    </div>
  );
}
