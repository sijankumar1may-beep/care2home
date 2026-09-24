import AirportParentPickup from "@/components/Airport/AirportParentPickup";
import SEO from "@/components/Seo";
import { bangaloreAirportContent } from "@/data/airportPickupContent";

const BangaloreAirport = () => {
  return (
    <>
      <SEO
        title="Bangalore Airport Parent Pickup | Kempegowda BLR Pickup for Parents | Elderly Parent Pickup Bengaluru | Care2Home"
        description="Kempegowda International Airport Bengaluru (BLR) parent pickup service. Airport pickup for elderly parents at Bangalore airport, senior citizen travel assistance. Verified care companions with live tracking. Book BLR airport parent pickup."
        canonical="https://www.care2home.co/bangalore-airport-parent-pickup"
        ogImage="https://www.care2home.co/newdelhfinal.png"
      />
      <AirportParentPickup content={bangaloreAirportContent} />
    </>
  );
};

export default BangaloreAirport;
