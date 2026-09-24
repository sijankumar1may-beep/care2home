import AirportParentPickup from "@/components/Airport/AirportParentPickup";
import SEO from "@/components/Seo";
import { hyderabadAirportContent } from "@/data/airportPickupContent";

const HyderabadAirport = () => {
  return (
    <>
      <SEO
        title="Hyderabad Airport Parent Pickup | RGIA Airport Pickup for Parents | Elderly Parent Pickup Hyderabad | Care2Home"
        description="Rajiv Gandhi International Airport Hyderabad (HYD) parent pickup service. Airport pickup for elderly parents at Shamshabad, senior citizen airport assistance Telangana. Safe doorstep drop with verified companions. Book HYD airport parent pickup."
        canonical="https://www.care2home.co/hyderabad-airport-parent-pickup"
        ogImage="https://www.care2home.co/newdelhfinal.png"
      />
      <AirportParentPickup content={hyderabadAirportContent} />
    </>
  );
};

export default HyderabadAirport;
