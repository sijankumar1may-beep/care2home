import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "@/components/Layout";
import DiscountPopup from "@/components/DiscountPopup";
import StructuredData from "@/components/StructuredData";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isEmbed = router.query.embed === "app";
  const organizationAndWebsiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.care2home.co/#organization",
      name: "Care2Home",
      url: "https://www.care2home.co/",
      logo: "https://www.care2home.co/care2homefavicon.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9910646415",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "New Ashok Nager, Mayur Vihar Tehsil, East Delhi",
        addressLocality: "Delhi",
        postalCode: "110096",
        addressCountry: "IN",
      },
      email: "info@care2home.co",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.care2home.co/#website",
      name: "Care2Home",
      url: "https://www.care2home.co/",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.care2home.co/#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.care2home.co/#localbusiness",
      name: "Care2Home",
      url: "https://www.care2home.co/",
      image: "https://www.care2home.co/care2homefavicon.png",
      telephone: "+91-9910646415",
      email: "info@care2home.co",
      address: {
        "@type": "PostalAddress",
        streetAddress: "New Ashok Nager, Mayur Vihar Tehsil, East Delhi",
        addressLocality: "Delhi",
        postalCode: "110096",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.59070101354673,
        longitude: 77.30841745833007,
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Delhi NCR",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.care2home.co/#professionalservice",
      name: "Care2Home Parent Pickup Assistance",
      url: "https://www.care2home.co/",
      provider: {
        "@id": "https://www.care2home.co/#organization",
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Delhi NCR",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      sameAs: ["https://www.care2home.co/"],
    },
  ];

  return (
    <Layout>
      <StructuredData
        id="global-schema"
        data={organizationAndWebsiteSchema}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D34L8EG2LC"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D34L8EG2LC');
  `}
      </Script>
      
      <Component {...pageProps} />
      {!isEmbed && <DiscountPopup />}
    </Layout>
  );
}
