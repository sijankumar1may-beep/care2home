import type { Metadata } from "next"
import AnandViharRailway from "@/components/Stations/AnandViharRailway"
import SEO from "@/components/Seo"
export const metadata: Metadata = {
  title: "Anand Vihar Railway Station Parent Pickup Service | Care2Home Delhi",
  description:
    "Safe and reliable parent pickup service from Anand Vihar Railway Station. Professional drivers, comfortable vehicles, and doorstep drop. Book your elderly parent pickup today.",
  keywords:
    "Anand Vihar Railway Station pickup, parent pickup Anand Vihar, elderly pickup service Delhi, railway station parent drop, Care2Home Anand Vihar",
}

export default function AnandViharStationPickupPage() {
  return<>
  <SEO title="Anand Vihar Railway Station Parent Pickup Service | Care2Home Delhi" description="Safe and reliable parent pickup service from Anand Vihar Railway Station. Professional drivers, comfortable vehicles, and doorstep drop. Book your elderly parent pickup today." canonical="/anand-vihar-railway-station-parent-pickup"/>
   <AnandViharRailway /></>
}
