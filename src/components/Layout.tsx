import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isEmbed = router.query.embed === "app";

  if (isEmbed) {
    return <div className="min-h-screen bg-white">{children}</div>;
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
