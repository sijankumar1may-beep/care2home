import {
  Heart,
  Target,
  Users,
  Shield,
  Home,
  Star,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/Seo";
const VisionMission = () => {
  return (
    <main className="main-container">
      <SEO
        title="Our Vision & Mission | Care2Home Parent Care & Assisted Travel Services"
        description="Discover Care2Home’s vision and mission to make parent and elderly travel safe, dignified, and stress-free. We are committed to trusted pickup, assisted travel, and compassionate care for families."
        canonical="https://www.care2home.co/vision-mission"
      />
      <div className="hero-section">
        <h2 className="hero-title">Our Vision & Mission</h2>
        <p className="hero-subtitle">
          Building a world where every parent travels with dignity, care, and
          the comfort of knowing someone genuinely cares.
        </p>
      </div>

      <div className="vision-mission-grid">
        <div className="card card-vision">
          <div className="card-header">
            <div className="card-icon-wrapper card-icon-blue">
              <Target className="card-icon text-blue-600" />
            </div>
            <h3 className="card-title">Our Vision</h3>
          </div>
          <p className="card-text">
            To become India&apos;s most trusted care companion service, ensuring
            that every elderly parent traveling alone feels safe, respected, and
            cared for – just as their own children would care for them.
          </p>
        </div>

        <div className="card card-mission">
          <div className="card-header">
            <div className="card-icon-wrapper card-icon-green">
              <Heart className="card-icon text-green-600" />
            </div>
            <h3 className="card-title">Our Mission</h3>
          </div>
          <div className="card-text">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              To provide compassionate, reliable, and dignified travel care for
              elderly parents through verified Care Companions who treat every
              senior with the respect and attention they deserve.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-care-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-care-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Safety First
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Every companion is background-verified and trained in elder
                    care.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-care-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-care-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Genuine Care
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    More than a service – we provide human connection and
                    warmth.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-care-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-care-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Family Peace
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Giving families peace of mind with real-time updates and
                    communication.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-care-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-care-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Dignity Always
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Treating every senior with the respect and patience they
                    deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h3 className="values-title">Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon-wrapper">
              <Heart className="value-icon" />
            </div>
            <h4 className="value-name">Compassion</h4>
            <p className="value-description">
              Every interaction is rooted in genuine care and empathy for
              elders.
            </p>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <Shield className="value-icon" />
            </div>
            <h4 className="value-name">Trust</h4>
            <p className="value-description">
              Building confidence through transparency, verification, and
              reliability.
            </p>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <Star className="value-icon" />
            </div>
            <h4 className="value-name">Excellence</h4>
            <p className="value-description">
              Delivering the highest quality of travel care
            </p>
          </div>

          <div className="value-item">
            <div className="value-icon-wrapper">
              <Users className="value-icon" />
            </div>
            <h4 className="value-name">Family</h4>
            <p className="value-description">
              Treating your parents as our own, with love and responsibility.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <Home className="cta-icon" />
        <h3 className="cta-title">Care That Starts at Your Doorstep</h3>
        <p className="cta-text">
          Care2Home is built for families who want safe, reliable care for their
          parents and loved ones without the stress of travel or long waiting
          times. From pickup, assistance, and doorstep support, we ensure
          comfort, dignity, and peace of mind — just like family would.
        </p>
        <button className="btn-primary">Book Care for Your Loved Ones</button>
      </div>
    </main>
  );
};

export default VisionMission;
