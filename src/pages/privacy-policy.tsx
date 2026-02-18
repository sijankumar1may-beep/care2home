import { Card } from "../components/Card";
import { Shield, Lock, Eye, UserCheck, Database, Globe, AlertCircle, PhoneIcon } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";
import SEO from "@/components/Seo";

export default function PrivacyPolicy() {
  const whatsappLink =
    "https://wa.me/919910646415?text=Hi%2C%20I%20have%20a%20question%20about%20Care2Home%20privacy%20policy";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <SEO
        title="Privacy Policy - Care2Home Parent Care Services | Care2home"
        description="Care2Home's privacy policy explains how we collect, use, and protect your personal information when using our parent care services and mobile application."
        canonical="https://www.care2home.co/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Introduction
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to Care2Home. We are committed to protecting your privacy
                and ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application, website, and
                services.
              </p>
              <p>
                By using Care2Home services, you agree to the collection and use of
                information in accordance with this policy. If you do not agree with
                our policies and practices, please do not use our services.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Database className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Information We Collect
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Personal Information:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Name, email address, phone number, and contact information
                </li>
                <li>Address and location information for service delivery</li>
                
                <li>
                  Parent/elderly person&apos;s information (name, age, medical
                  conditions if relevant, travel details)
                </li>
                <li>Emergency contact information</li>
                <li>Profile photos (if you choose to upload them)</li>
              </ul>

              <p className="mt-4">
                <strong>Device and Usage Information:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device type, operating system, and unique device identifiers</li>
                <li>IP address and mobile network information</li>
                <li>App usage data, features accessed, and interaction patterns</li>
                <li>Location data (with your permission) for service delivery</li>
                <li>Crash reports and performance data</li>
              </ul>

              <p className="mt-4">
                <strong>Service-Related Information:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Booking history and service requests</li>
                <li>Communication records (calls, messages, support tickets)</li>
                <li>Feedback, reviews, and ratings</li>
                <li>Travel details (flight/train numbers, arrival times)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Eye className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How We Use Your Information
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Delivery:</strong> To provide, maintain, and
                  improve our parent care services, including matching you with Care
                  Companions and coordinating travel assistance
                </li>
                <li>
                  <strong>Communication:</strong> To send you service updates,
                  booking confirmations, real-time journey updates, and respond to
                  your inquiries
                </li>
                
                <li>
                  <strong>Safety and Security:</strong> To verify Care Companions,
                  ensure service quality, and protect against fraud or abuse
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable laws,
                  regulations, and legal processes
                </li>
                <li>
                  <strong>Analytics and Improvement:</strong> To analyze usage
                  patterns, improve our services, and develop new features
                </li>
                <li>
                  <strong>Marketing:</strong> To send you promotional materials and
                  updates about our services (you can opt-out at any time)
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <UserCheck className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Information Sharing and Disclosure
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Care Companions:</strong> We share necessary information
                  (name, contact details, location) with assigned Care Companions to
                  enable service delivery
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share information with
                  trusted third-party service providers who assist us in operations
                  (payment processors, cloud storage, analytics, customer support)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information
                  if required by law, court order, or government regulation
                </li>
                <li>
                  <strong>Safety and Protection:</strong> We may share information
                  to protect the rights, property, or safety of Care2Home, our users,
                  or others
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be transferred
                  to the new entity
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with
                  your explicit consent for specific purposes
                </li>
              </ul>
              <p className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <strong>Note:</strong> Care Companions are bound by confidentiality
                agreements and are only provided with information necessary to
                perform their duties.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Lock className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Data Security
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your
                personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Encryption of data in transit using SSL/TLS protocols
                </li>
                <li>
                  Secure storage of sensitive information with encryption at rest
                </li>
                <li>
                  Regular security audits and vulnerability assessments
                </li>
                <li>
                  Access controls and authentication mechanisms to limit data access
                  to authorized personnel only
                </li>
                <li>
                  Secure payment processing through PCI-compliant payment gateways
                </li>
                <li>
                  Regular backups and disaster recovery procedures
                </li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic
                storage is 100% secure. While we strive to protect your information,
                we cannot guarantee absolute security.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <Globe className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Location Information
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our mobile application may collect and use location information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enable real-time tracking during service delivery</li>
                <li>Provide accurate pickup and drop-off services</li>
                <li>Send location-based updates to family members</li>
                <li>Improve service efficiency and routing</li>
              </ul>
              <p className="mt-4">
                Location services are only active when you grant permission and when
                a service is in progress. You can disable location sharing at any
                time through your device settings, though this may affect service
                quality.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p>
                Our website and mobile app may use cookies, web beacons, and similar
                tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze app usage and performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve user experience</li>
              </ul>
              <p className="mt-4">
                You can control cookie preferences through your browser or device
                settings. However, disabling cookies may limit certain features of
                our services.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p>
                Our app may contain links to or integrate with third-party services,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors (Razorpay, Stripe, etc.)</li>
                <li>Cloud storage and hosting services</li>
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Communication platforms (WhatsApp, SMS gateways)</li>
                <li>Maps and location services (Google Maps, etc.)</li>
              </ul>
              <p className="mt-4">
                These third-party services have their own privacy policies. We
                encourage you to review their policies as we are not responsible for
                their practices.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request access to your personal information
                  we hold
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or
                  incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal and operational requirements)
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing communications
                  at any time
                </li>
                <li>
                  <strong>Location Controls:</strong> Manage location permissions
                  through your device settings
                </li>
                <li>
                  <strong>Account Deletion:</strong> Request account deletion through
                  app settings or by contacting us
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information
                provided at the end of this policy.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4 mb-4">
              <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Children&apos;s Privacy
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our services are designed for adults who are booking care services
                for elderly parents. We do not knowingly collect personal
                information from children under the age of 18.
              </p>
              <p>
                If you believe we have inadvertently collected information from a
                child, please contact us immediately, and we will take steps to
                delete such information.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain service quality and safety records</li>
              </ul>
              <p className="mt-4">
                When information is no longer needed, we securely delete or
                anonymize it in accordance with our data retention policies.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries
                other than your country of residence. These countries may have
                different data protection laws.
              </p>
              <p>
                We ensure that appropriate safeguards are in place to protect your
                information in accordance with this Privacy Policy, regardless of
                where it is processed.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or other
                factors.
              </p>
              <p>
                We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website and app</li>
                <li>Sending you an email notification (if you have an account)</li>
                <li>Displaying an in-app notification</li>
              </ul>
              <p className="mt-4">
                The &quot;Last updated&quot; date at the top of this policy indicates when
                it was last revised. Your continued use of our services after
                changes become effective constitutes acceptance of the updated
                policy.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy
                Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> privacy@care2home.co
                </p>
                <p>
                  <strong>Phone:</strong> +91 9910646415
                </p>
                <p>
                  <strong>Address:</strong> Care2Home, Delhi NCR, India
                </p>
              </div>
              <p className="mt-4">
                We will respond to your inquiries within a reasonable timeframe and
                in accordance with applicable data protection laws.
              </p>
            </div>
          </Card>

          <div className="p-6 md:p-8 rounded-xl bg-care-warm border border-border text-center">
            <h3 className="text-lg font-semibold text-care-trust mb-2">
              Have Questions About Privacy?
            </h3>
            <p className="text-muted-foreground mb-4">
              We are committed to protecting your privacy. Contact us if you have
              any concerns or questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Contact on WhatsApp
                </a>
              </Button>
              <Button>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: December 2024</p>
          <p className="mt-2">
            This Privacy Policy is effective as of the date stated above and applies
            to all users of Care2Home services.
          </p>
        </div>
      </div>
    </div>
  );
}

