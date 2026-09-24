import AirportParentPickup from "@/components/Airport/AirportParentPickup";
import SEO from "@/components/Seo";
import { puneAirportContent } from "@/data/airportPickupContent";

const PuneAirport = () => {
  return (
    <>
      <SEO
        title="Pune Airport Parent Pickup | Lohegaon Airport Pickup for Parents | Elderly Parent Pickup Pune | Care2Home"
        description="Pune Airport Lohegaon (PNQ) parent pickup service. Airport pickup for elderly parents at Pune airport, senior citizen travel assistance PCMC. Verified companions with live updates. Book Pune airport parent pickup."
        canonical="https://www.care2home.co/pune-airport-parent-pickup"
        ogImage="https://www.care2home.co/newdelhfinal.png"
      />
      <AirportParentPickup content={puneAirportContent} />
    </>
  );
};

export default PuneAirport;
