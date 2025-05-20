import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import "./styles/css/style.css";
import "./styles/css/main.css";
import "./styles/css/bootstrap.min.css";
import "./styles/css/meanmenu.min.css";
import "./styles/css/fontawesome-all.min.css";
import "./styles/css/animate.min.css";
import "./styles/font/flaticon.css";
import "./styles/vendor/slider/css/nivo-slider.css";
import "./styles/vendor/OwlCarousel/owl.carousel.min.css";
import "./styles/vendor/OwlCarousel/owl.theme.default.min.css";
import "./styles/css/select2.min.css";
import "./styles/css/jquery.datetimepicker.css";
import "./../../public/site.webmanifest.json";
import Head from "next/head";
import Script from "next/script";
import Preloader from "@/Component/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wilshine Cleaning Services",
  description:
    "Wilshine Cleaning Services is a property management company that specializes in managing residential and commercial properties.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <div>
          <a href="#wrapper" data-type="section-switch" className="scrollup">
            <i className="fas fa-angle-double-up"></i>
          </a>
          {/* <div id="preloader"></div> */}
          <div id="wrapper" className="wrapper">
            <Head>
              <meta charSet="utf-8" />
              <meta httpEquiv="x-ua-compatible" content="ie=edge" />
              <meta name="description" content="" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Why Choose a Local Cleaning Company | Wilshine Cleaning"
              />
              <meta
                name="twitter:description"
                content="Discover why choosing a local Perth-based cleaning company like Wilshine Cleaning gives you better service, pricing, and results."
              />
              <meta name="twitter:image" content="/img/blog/why.png" />
              <link rel="manifest" href="/site.webmanifest.json" />
            </Head>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Script src="js/jquery-3.3.1.min.js"></Script>
          <Script src="js/plugins.js"></Script>
          <Script src="js/popper.min.js"></Script>
          <Script src="js/bootstrap.min.js"></Script>
          <Script src="js/jquery.meanmenu.min.js"></Script>
          <Script src="vendor/slider/js/jquery.nivo.slider.js"></Script>
          <Script src="vendor/slider/home.js"></Script>
          <Script src="vendor/OwlCarousel/owl.carousel.min.js"></Script>
          <Script src="js/jquery.counterup.min.js"></Script>
          <Script src="js/waypoints.min.js"></Script>
          <Script src="js/validator.min.js"></Script>
          <Script src="js/select2.min.js"></Script>
          <Script src="js/jquery.datetimepicker.full.min.js"></Script>
          <Script src="js/main.js"></Script>
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=your_site_key`}
            strategy="beforeInteractive"
          />
        </div>
      </body>
    </html>
  );
}
