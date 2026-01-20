"use client";

import { Card, CardContent } from "@/components/Cardnew";
import { Shield, CheckCircle, Clock, MapPin, ArrowRightLeft, BellRing } from "lucide-react";
import StickyButton from "../components/StickyButton";
import PricingModel from "../components/PricingModel";
import InterchangeHeroSection from "@/components/StationsHeroBanner/InterchangeHeroSection";

export default function InterchangeService() {
    const whatsappNumber = "919910646415";

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hi Care2Home, I need Interchange Service (receive from one train/flight and drop to another train/flight). Please share details.`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <InterchangeHeroSection />

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-lg">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Interchange Service: Train/Flight Transfer Assistance for Parents
                            </h2>

                            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                                <p>
                                    Our <strong>Interchange Service</strong> is for families whose parents are travelling alone
                                    and need support moving from one train/flight to the next in Delhi NCR. Whether it’s
                                    station-to-station, airport-to-station, station-to-airport, or terminal-to-terminal, a verified
                                    <strong> Care2Home Companion</strong> ensures a safe, comfortable, and stress-free interchange.
                                </p>

                                <p>
                                    We meet your parent at the arrival point with a name placard, help with luggage, assist with
                                    walking or wheelchair needs, and support them through the station/airport process. If there’s
                                    waiting time between interchange, our companion stays with them—arranging seating, helping with
                                    water/food, and keeping you updated on WhatsApp with live status and location.
                                </p>

                                <p>
                                    Delays and last-minute platform/terminal changes are common. Our team tracks the schedule and
                                    coordinates accordingly, so your parent is never alone during the interchange and is comfortably
                                    supported until they are at the correct gate/platform for the onward journey.
                                </p>

                                <p>
                                    All Care2Home Companions are background-verified and trained for elderly assistance. Booking is
                                    quick via phone call or WhatsApp—share the arrival and departure details, and we’ll take care of
                                    everything for your peace of mind.
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How it Works */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        How the Interchange Service Works
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Receive on Arrival</h4>
                                <p className="text-sm text-gray-600">
                                    Our Care2Home Companion receives your parent at the platform/arrival gate with a name
                                    placard and confirms details for a smooth start.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ArrowRightLeft className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Support the Interchange</h4>
                                <p className="text-sm text-gray-600">
                                    We help with luggage, walking/wheelchair needs, and guidance through the station/airport—
                                    including moving to the next station/terminal when required.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BellRing className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Stay Until Departure</h4>
                                <p className="text-sm text-gray-600">
                                    If there’s waiting time, we stay with your parent until the next train/flight
                                    departs—helping with seating, water/food, and ensuring they’re at the correct
                                    gate/platform.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Why Care2Home for Interchange Service?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Verified & Trusted</h4>
                                <p className="text-sm text-gray-600">
                                    Background-verified companions trained for elderly support.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Delays Handled</h4>
                                <p className="text-sm text-gray-600">
                                    We adapt to delays, platform changes, and re-routing with live updates.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Complete Assistance</h4>
                                <p className="text-sm text-gray-600">
                                    Arrival pickup, transfer help, waiting support, and safe handover.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What We Need */}
            <section className="container mx-auto px-4 pb-12">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardContent className="p-8 md:p-10">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Details We Need for Booking</h3>

                            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Arrival Details</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Train/Flight number</li>
                                        <li>Station/Airport + Terminal (if applicable)</li>
                                        <li>Arrival date & time</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold">Departure Details</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Train/Flight number</li>
                                        <li>Station/Airport + Terminal (if applicable)</li>
                                        <li>Departure date & time</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold">Parent Assistance</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Age and mobility needs</li>
                                        <li>Wheelchair requirement (Yes/No)</li>
                                        <li>Luggage count</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold">Family Contact</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>WhatsApp number for live updates</li>
                                        <li>Emergency contact</li>
                                        <li>Pickup/drop preferences</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a
                                    href="tel:+919910646415"
                                    className="rounded-lg bg-green-600 text-white px-6 py-3 text-base font-semibold hover:bg-green-700 transition flex items-center justify-center"
                                >
                                    📞 Call to Book Interchange
                                </a>
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="rounded-lg border-2 border-accent text-accent px-6 py-3 text-base font-semibold hover:bg-accent/10 transition flex items-center justify-center"
                                >
                                    💬 WhatsApp Booking
                                </button>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Share details once, we’ll coordinate everything end-to-end.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gray-100 text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                            Book Interchange Service for Parents
                        </h2>
                        <p className="text-lg mb-6 opacity-90 leading-relaxed text-balance">
                            One companion, one responsibility: your parent’s safe connection from arrival to departure.
                            Available 24/7 across Delhi NCR.
                        </p>

                        <a
                            href="tel:+919910646415"
                            className="inline-block bg-green-500 px-8 py-3 rounded-lg font-semibold text-lg text-white"
                        >
                            📞 Call Now – Speak to a Human
                        </a>

                        <p className="mt-3 text-sm font-medium text-foreground">
                            Transfers today? Book instantly.
                        </p>
                        <p className="mt-3 text-sm opacity-80">
                            Most bookings are confirmed over a quick call
                        </p>
                        <p className="mt-4 text-sm opacity-75">
                            Serving Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <PricingModel />
            </section>

            <StickyButton buttonTitle="📞 Call Now | Interchange Service | 24/7" />
        </div>
    );
}
