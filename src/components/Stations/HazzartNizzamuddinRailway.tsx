"use client"

import { Button } from "@/components/Button"
import { Card, CardContent } from "@/components/Cardnew"
import { Shield, CheckCircle, Clock, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function HazratNizamuddinRailway() {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "919910646415"
  const stationName = "Hazrat Nizamuddin Railway Station"

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Care2Home, I need parent pickup service from ${stationName}. Please share details.`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Hazrat Nizamuddin Railway Station
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Reliable Parent Pickup from Hazrat Nizamuddin Railway Station
          </h1>

          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Premium pickup service for elderly parents arriving at Hazrat Nizamuddin Station. Professional drivers,
            comfortable vehicles, and complete peace of mind for your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
             href="/book-service"
              className="bg-green-600 hover:bg-green-700 text-white gap-2 text-xl p-4 rounded-2xl"
            >
              
              Book now
            </Link>
            <Button size="lg" variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hazrat Nizamuddin Station Parent Pickup Service</h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Hazrat Nizamuddin Railway Station is a premier railway terminal in Delhi, serving as a major hub for
                  prestigious trains like Rajdhani, Shatabdi, and Duronto Express. When your elderly parents arrive at
                  this busy station, you want to ensure they have a safe, comfortable journey home. Care2Home
                  specializes in providing dedicated parent pickup services from Hazrat Nizamuddin Railway Station with
                  professional care and reliability.
                </p>

                <p>
                  Our experienced drivers understand the unique needs of elderly passengers. After a long train journey,
                  comfort and safety are paramount. We provide well-maintained, air-conditioned vehicles with
                  comfortable seating to ensure your parents travel in complete comfort. Our team monitors train
                  schedules in real-time, ensuring we&apos;re always on time, whether the train arrives early or is delayed.
                </p>

                <p>
                  Booking our Hazrat Nizamuddin pickup service is hassle-free. Simply message us on WhatsApp with your
                  parent&apos;s train details, and we&apos;ll take care of everything. Our driver will meet your parents at the
                  designated platform, help with luggage, and provide a smooth, safe ride to their destination. We keep
                  you updated throughout the journey, so you always know your parents are in safe hands.
                </p>

                <p>
                  Care2Home is more than just a transportation service. We&apos;re your trusted partner in ensuring your
                  parents&apos; safety and comfort. All our drivers are thoroughly background-verified, trained in elderly
                  assistance, and committed to providing compassionate service. We cover all areas of Delhi NCR from
                  Hazrat Nizamuddin Railway Station with transparent pricing and no hidden charges. Give your parents
                  the gift of a comfortable, dignified journey home. Book Care2Home&apos;s professional parent pickup service
                  from Hazrat Nizamuddin Railway Station today.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Why Care2Home for Hazrat Nizamuddin Pickup?</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Trusted Service</h4>
                <p className="text-sm text-gray-600">Verified drivers with elderly care training</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Available</h4>
                <p className="text-sm text-gray-600">Round-the-clock pickup service</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Complete Care</h4>
                <p className="text-sm text-gray-600">Platform pickup to doorstep delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Book Parent Pickup from Hazrat Nizamuddin Now</h3>
          <p className="text-xl mb-8 text-blue-100">Professional Service | Available 24/7 | Instant WhatsApp Booking</p>
          <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-700 gap-2">
            <Phone className="w-5 h-5" />
            Book Now on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}
