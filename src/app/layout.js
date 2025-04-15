import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blossom Property Services",
  description:
    "Blossom Property Services is a property management company that specializes in managing residential and commercial properties.",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* CSS */}
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/font/flaticon.css" />
        <link rel="stylesheet" href="/vendor/slider/css/nivo-slider.css" />
        <link rel="stylesheet" href="/vendor/OwlCarousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/vendor/OwlCarousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/select2.min.css" />
        <link rel="stylesheet" href="/css/jquery.datetimepicker.css" />
        <link rel="stylesheet" href="/style.css" />

        {/* Modernizr - load before anything else */}
        <Script src="/js/modernizr-3.7.1.min.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Scripts */}
        <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
        <Script src="/vendor/slider/js/jquery.nivo.slider.js" strategy="lazyOnload" />
        <Script src="/vendor/slider/home.js" strategy="lazyOnload" />
        <Script src="/vendor/OwlCarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        <Script src="/js/select2.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.datetimepicker.full.min.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
