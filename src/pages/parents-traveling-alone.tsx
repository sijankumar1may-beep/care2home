import HomeVideoPage from "@/components/HomeVideoPage";
import { parentsTravelingAloneVideo } from "@/lib/home-videos";

export default function ParentsTravelingAloneVideoPage() {
  return (
    <HomeVideoPage
      config={parentsTravelingAloneVideo}
      breadcrumbLabel="Parents Traveling Alone"
    />
  );
}
