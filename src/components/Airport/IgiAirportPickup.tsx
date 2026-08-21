
import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, MapPin, Plane } from "lucide-react";
import StickyButton from "../StickyButton";
import PricingModel from "../PricingModel";

export default function IGIAirportPickup() {
    const whatsappNumber = "919910646415";
    const airportName = "Indira Gandhi International Airport, Delhi";

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hi Care2Home, I need parent pickup service from ${airportName}. Please share details.`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MapPin className="w-4 h-4" />
                            IGI Airport (DEL)
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                            Your Parents Are Landing Alone at IGI… Who Will Take Care of Them?
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                            We meet them at the arrival gate → handle luggage → drop inside home safely
                            <span className="block mt-2 font-medium text-foreground">
                                Live WhatsApp updates at every step.
                            </span>
                        </p>

                        <p className="text-lg text-red-600 font-semibold mb-8">
                            No more worrying about late flights, crowds, or long walks...
                        </p>


                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground mb-8">
                            <span>✔ Arrival Gate Assistance</span>
                            <span>✔ Till-Home Responsibility</span>
                            <span>✔ Across India (Delhi NCR hub)</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919910646415"
                                className="rounded-lg bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition"
                            >
                                📞 Call Now – 2 Min Booking
                            </a>

                            <button
                                onClick={handleWhatsAppClick}
                                className="rounded-lg cursor-pointer border-2 border-accent text-accent px-6 py-3 text-lg font-medium hover:bg-accent/10 transition"
                            >
                                💬 WhatsApp Us
                            </button>
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Domestic & International flights • Available 24/7
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-lg">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-6">
                                IGI Airport Parent Pickup Service
                            </h2>

                            <div className="prose prose-lg max-w-none space-y-5">
                                <p>Indira Gandhi International Airport is one of India’s busiest airports,
                                    and for elderly parents traveling alone, the arrival experience can be
                                    physically and emotionally exhausting. Long walks, crowded terminals,
                                    baggage handling, and finding the correct exit can become stressful.
                                    Care2Home provides a dedicated parent pickup service from IGI Airport,
                                    focused entirely on safety, comfort, and dignity.
                                </p>

                                <p>
                                    Our trained care companions closely monitor flight status in real time
                                    and reach the airport before landing. We meet your parents inside the
                                    terminal at the arrival gate, assist them with luggage, and stay by
                                    their side throughout the entire exit process. Whether it’s immigration,
                                    baggage claim, or navigating crowded areas, your parents are never left
                                    alone.
                                </p>

                                <p>
                                    We understand that elderly parents may require extra time, patience,
                                    and emotional reassurance after a long journey. Our companions provide
                                    calm, respectful assistance, helping them move comfortably without
                                    rushing. From the moment they land, your parents are under continuous
                                    care and supervision.
                                </p>

                                <p>
                                    Once your parents leave the airport, we take complete responsibility
                                    until they are safely settled inside their home. Families receive live
                                    WhatsApp updates, photos if required, and final confirmation once the
                                    drop is completed. Every Care2Home companion is background-verified,
                                    trained in elderly assistance, and committed to compassionate service.
                                </p>

                                <p>
                                    Whether it’s a late-night international arrival, an early morning
                                    domestic flight, or a first-time solo journey for your parents,
                                    Care2Home ensures a stress-free, reliable airport pickup experience
                                    across India—with strong coverage in Delhi NCR. Our goal is simple — your parents arrive home safely,
                                    and you remain completely worry-free.
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Why Care2Home for Airport Pickup?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Plane className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                                <h4 className="font-semibold mb-2">Arrival Gate Meet</h4>
                                <p className="text-sm text-gray-600">
                                    We receive parents inside the terminal
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <Shield className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                                <h4 className="font-semibold mb-2">Verified Companions</h4>
                                <p className="text-sm text-gray-600">
                                    Background-checked & trained staff
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <Clock className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                                <h4 className="font-semibold mb-2">24/7 Support</h4>
                                <p className="text-sm text-gray-600">
                                    Early morning & late night flights
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-gray-100 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Book Parent Pickup from IGI Airport
                </h2>
                <p className="mb-6">
                    Peace of mind from landing to home. Available 24/7.
                </p>

                <a
                    href="tel:+919910646415"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
                >
                    📞 Call Now – Speak to a Human
                </a>
            </section>
            <section>
                <PricingModel />
            </section>

            <StickyButton buttonTitle="✈️ Call Now | IGI Airport Parent Pickup | 24/7" />
        </div>
    );
}
