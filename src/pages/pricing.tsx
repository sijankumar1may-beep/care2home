import PricingModel from "@/components/PricingModel";
import SEO from "@/components/Seo";

const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing | Care2Home Parent Pickup & Assisted Travel Care"
        description="View Care2Home’s simple and transparent pricing for parent pickup and assisted travel services. Distance-based care pricing with verified companions and no hidden charges."
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
