import ContactForm from "@/components/ContactUs";
import SEO from "@/components/Seo";
export default function Contactus() {
  return (
    <>
      <main className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <SEO
          title="Contact Us | Care2Home Parent Pickup & Assisted Travel Support"
          description="Get in touch with Care2Home for questions, support, or booking assistance. We’re here to help families arrange safe pickup and assisted travel care for parents and elderly loved ones."
          canonical="https://www.care2home.co/contact-us"
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Fill out the form below
            and we&apos;ll get back to you via WhatsApp.
          </p>
        </div>
        <ContactForm />
      </main>
    </>
  );
}
