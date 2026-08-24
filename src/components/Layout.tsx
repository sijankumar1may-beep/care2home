import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isEmbed = router.query.embed === "app";

  if (isEmbed) {
    return (
      <div className="min-h-screen bg-white pb-[calc(5rem+env(safe-area-inset-bottom,16px))]">
        {children}
      </div>
    );
  }

  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
