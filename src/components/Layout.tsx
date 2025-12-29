import Header from "./Header";
import Footer from "./Footer";
import { ReactElement } from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
