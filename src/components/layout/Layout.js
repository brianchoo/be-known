import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

const Layout = ({ children }) => {
  return (
    <div className={`${montserrat.variable} font-mont text-black`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
