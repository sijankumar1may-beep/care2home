import HomeVideoPage from "@/components/HomeVideoPage";
import { howItWorksVideo } from "@/lib/home-videos";

export default function HowItWorksVideoPage() {
  return (
    <HomeVideoPage
      config={howItWorksVideo}
      breadcrumbLabel="How It Works Video"
    />
  );
}
