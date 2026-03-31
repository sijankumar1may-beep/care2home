import AboutPage from "@/components/Aboutus";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
const Aboutus = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.care2home.co/about-us#aboutpage",
    name: "About Care2Home",
    url: "https://www.care2home.co/about-us",
    isPartOf: {
      "@id": "https://www.care2home.co/#website",
    },
    about: {
      "@id": "https://www.care2home.co/#organization",
    },
  };

  const aboutBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.care2home.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.care2home.co/about-us",
      },
    ],
  };

  return (
    <>
      <SEO
        title="About Us | Elderly Parent Pickup Service Delhi | Parent Care & Travel Assistance | Care2Home"
        description="Learn about Care2Home - trusted elderly parent pickup service Delhi, railway station pickup, airport pickup for parents. Our story, vision, and commitment to safe parent travel assistance."
        canonical="https://www.care2home.co/about-us"
      />
      <StructuredData id="about-page-schema" data={aboutPageSchema} />
      <StructuredData id="about-breadcrumb-schema" data={aboutBreadcrumbSchema} />

      <AboutPage />
    </>
  );
};

export default Aboutus;
