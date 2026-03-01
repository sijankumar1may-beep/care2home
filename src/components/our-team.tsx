import { Users, Heart, Shield, Award } from "lucide-react";
import Image from "next/image";
import SEO from "@/components/Seo";
const teamMembers = [
  {
    name: "Sumit Kumar",
    role: "Founder & CEO",
    description:
      "Sumit founded Care2Home with a simple mission — to ensure parents and elderly family members travel safely, comfortably, and with dignity. Drawing from real-life family needs and operational experience, he is focused on building a trusted assisted travel and pickup–drop service for families across India.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Deepak Patel",
    role: "Head of Care & Safety Standards",
    description:
      "A senior-care specialist responsible for defining Care2Home’s safety protocols, companion guidelines, and emergency response standards to ensure every parent travels with confidence and care.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Alok Ranjan",
    role: "Operations & Logistics Head",
    description:
      "Leads daily operations, including pickup scheduling, route coordination, and on-ground execution to ensure timely, smooth, and stress-free journeys for parents and families.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sunita Reddy",
    role: "Training & Care Companion Lead",
    description:
      "Designs and manages training programs for Care Companions, focusing on empathy, elder handling, communication, and real-world travel assistance scenarios.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction is guided by genuine care and empathy for our elderly travelers.",
  },
  {
    icon: Shield,
    title: "Verified Trust",
    description:
      "All team members undergo rigorous background verification and training.",
  },
  {
    icon: Users,
    title: "Family Values",
    description:
      "We treat every parent like our own, ensuring dignity and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to maintaining the highest standards in senior travel care.",
  },
];

const OurTeam = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-care-blue-light to-background py-16 md:py-24">
        <SEO
          title="Meet Our Team - Care2Home Parent Care & Assisted Travel Experts | Care2Home"
          description="Get to know the people behind Care2Home. Our team ensures safe, dignified pickup and assisted travel care for parents through trained companions and strong safety standards."
          canonical="https://www.care2home.co/our-team"
        />

        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-care-trust mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to providing compassionate,
            reliable travel care for your loved ones.
          </p>
        </div>
      </section>

      {/* Team Values */}
      <section className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="mx-auto md:mx-8 px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-care-trust mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our experienced leaders bring together expertise in healthcare,
              operations, and senior care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={member.name}
                    className=" object-cover hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={100}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Companions Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="md:mx-8 px-6 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-care-trust mb-6">
              Our Care Companions
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Beyond our leadership team, we have a network of over{" "}
              <strong className="text-foreground">
                200+ verified Care Companions
              </strong>{" "}
              across India. Each companion undergoes:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-lg bg-care-green-light border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">
                  Background Verification
                </h4>
                <p className="text-sm text-muted-foreground">
                  Police verification, ID checks, and reference validation for
                  complete trust.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-care-blue-light border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">
                  Professional Training
                </h4>
                <p className="text-sm text-muted-foreground">
                  40+ hours of senior care training including first aid and
                  emergency response.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-care-warm border border-orange-200">
                <h4 className="font-semibold text-orange-700 mb-2">
                  Continuous Monitoring
                </h4>
                <p className="text-sm text-muted-foreground">
                  Regular performance reviews and feedback integration for
                  quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Want to Join Our Mission?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            If you share our passion for dignified elder care, we&apos;d love to
            hear from you.
          </p>
          <a
            href="mailto:careers@care2home.in"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Contact Us for Careers
          </a>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
