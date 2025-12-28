import { Calendar, Users, Home } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Book a Care Companion",
    description: "Share your parent's travel details through our simple form or WhatsApp. We'll confirm the booking within minutes.",
  },
  {
    icon: Users,
    step: "2",
    title: "Companion meets your parent",
    description: "Our verified Care Companion arrives at the airport or railway station with a name placard, ready to assist.",
  },
  {
    icon: Home,
    step: "3",
    title: "Safe travel home",
    description: "Your parent travels comfortably with live location updates sent to you. Our companion ensures they reach home safely.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-care-trust mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple, transparent process to ensure your parents&apos; safe journey home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-care-blue-light flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-care-trust mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;