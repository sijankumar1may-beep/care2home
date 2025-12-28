
import { Card } from '../components/Card';
import { Shield,PhoneCall, Clock, MessageCircle, CheckCircle, Plane, Train, Home as HomeIcon, Heart, UserCheck, Bell } from 'lucide-react';
const Safetyandtrust=()=>{


    return (<><section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Safety & Trust
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Your parent&apos;s safety is our priority. Every detail is designed for your peace of mind.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <Shield className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Background Verified</h3>
            <p className="text-gray-600">
              Every Care Companion undergoes thorough background verification and training.
            </p>
          </Card>

          <Card>
            <UserCheck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ID Card Provided</h3>
            <p className="text-gray-600">
              Companions carry official ID cards. You will know exactly who is meeting your parent.
            </p>
          </Card>

          <Card>
            <Bell className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Updates</h3>
            <p className="text-gray-600">
              Track the journey in real-time. Get updates when they meet, board, and reach home.
            </p>
          </Card>

          <Card>
            <MessageCircle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Contact</h3>
            <p className="text-gray-600">
              Speak directly with the Care Companion before and during the journey.
            </p>
          </Card>

          <Card>
            <Clock className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Rush, No Stress</h3>
            <p className="text-gray-600">
              Our companions are patient and respectful. They move at your parent&apos;s pace.
            </p>
          </Card>

          <Card>
            <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Cash Handling</h3>
            <p className="text-gray-600">
              All payments are digital. Your parent doesn&apos;t need to handle any money during travel.
            </p>
          </Card>
          <Card>
            <PhoneCall className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
            Our team is always available via WhatsApp to address any concerns during travel.
            </p>
          </Card>
        </div>
      </section></>)
}

export default Safetyandtrust;