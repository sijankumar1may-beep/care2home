import AirportParentPickup from "@/components/Airport/AirportParentPickup";
import SEO from "@/components/Seo";
import { jaipurAirportContent } from "@/data/airportPickupContent";

const JaipurAirport = () => {
  return (
    <>
      <SEO
        title="Jaipur Airport Parent Pickup | Airport Pickup Service Jaipur for Parents | Elderly Parent Pickup JAI | Care2Home"
        description="Jaipur International Airport (JAI) parent pickup service. Airport pickup for elderly parents at Jaipur airport, senior citizen airport assistance Sanganer. Safe doorstep drop with verified care companions. Book Jaipur airport parent pickup."
        canonical="https://www.care2home.co/jaipur-airport-parent-pickup"
        ogImage="https://www.care2home.co/newdelhfinal.png"
      />
      <AirportParentPickup content={jaipurAirportContent} />
    </>
  );
};

export default JaipurAirport;
