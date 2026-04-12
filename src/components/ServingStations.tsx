"use client";

import Link from "next/link";
import Image from "next/image";

const stations = [
  {
    name: "New Delhi Railway Station",
    slug: "/new-delhi-railway-station-parent-pickup",
    image: "/newdelhfinal.png",
  },
  {
    name: "Old Delhi Railway Station",
    slug: "/old-delhi-railway-station-parent-pickup",
    image: "/placeholder.svg",
  },
  {
    name: "Delhi Cantt Railway Station",
    slug: "/delhi-cantt-railway-station-parent-pickup",
    image: "/delhicanttfinal.png",
  },
  {
    name: "Hazrat Nizamuddin Railway Station",
    slug: "/hazrat-nizamuddin-railway-station-parent-pickup",
    image: "/placeholder.svg",
  },
  {
    name: "Anand Vihar Railway Station",
    slug: "/anand-vihar-railway-station-parent-pickup",
    image: "/anandvihar.png",
  },
  {
    name: "Ghaziabad Railway Station",
    slug: "/ghaziabad-railway-station-parent-pickup",
    image: "/placeholder.svg",
  },
  {
    name: "Delhi Sarai Rohilla Railway Station",
    slug: "/delhi-sarai-rohilla-railway-station-parent-pickup",
    image: "/placeholder.svg",
  },
  {
    name: "Jaipur Railway Station",
    slug: "/jaipur-railway-station-parent-pickup",
    image: "/placeholder.svg",
  },
  {
    name: "Stations Interchange",
    slug: "/interchange-service",
    image: "/placeholder.svg",
  },
];

export default function ServiceStations() {
  return (
    <section className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16" id="serving-stations">
      <div className="container mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Serving Railway Stations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {stations.map((station, index) => (
            <Link key={index} href={station.slug}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                
                {/* Image */}
                <div className="relative w-full h-65">
                  <Image
                    src={station.image}
                    alt={station.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    {station.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Parent Pickup Service
                  </p>

                  <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
                    View Details →
                  </button>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}