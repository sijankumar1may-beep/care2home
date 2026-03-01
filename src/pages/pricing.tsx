import PricingModel from "@/components/PricingModel";
import SEO from "@/components/Seo";

const Pricing = () => {
  return (
    <>
      <SEO
        title="Parent Pickup Service Price | Elderly Parent Pickup Cost Delhi | Railway Station Pickup Pricing | Care2Home"
        description="Simple and transparent pricing for elderly parent pickup service Delhi, railway station pickup service, airport pickup for parents. Distance-based pricing with verified companions. No hidden charges. View parent pickup service price now."
        canonical="https://www.care2home.co/pricing"
      />
       {/* <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Care-focused pricing designed for parents and families.
            No surge pricing, no hidden fees — just honest care.
          </p>
        </div>
      </section> */}
      <PricingModel/>
    </>
  );
};

export default PricingModel;
