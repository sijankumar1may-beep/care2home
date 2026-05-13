import { Card } from "@/components/Card";
import {
  Shield,
  PhoneCall,
  Clock,
  MessageCircle,
  CheckCircle,
  UserCheck,
  Bell,
  BadgeCheck,
  Siren,
  MapPin,
} from "lucide-react";

function LiveUpdatePhoneMock({
  title,
  messages,
}: {
  title: string;
  messages: string[];
}) {
  return (
    <figure className="mx-auto w-full max-w-[280px]">
      <div
        className="rounded-[1.75rem] border-[10px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-black/10"
        aria-hidden
      >
        <div className="bg-emerald-800 text-white text-xs font-medium px-3 py-2.5 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          {title}
        </div>
        <div className="bg-[#e7e1d7] p-3 space-y-2 min-h-[220px]">
          {messages.map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-lg rounded-tl-sm p-2.5 text-xs text-gray-800 shadow-sm leading-relaxed border border-gray-100"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-center text-xs text-gray-500 mt-3">
        Illustrative sample of journey updates
      </figcaption>
    </figure>
  );
}

const Safetyandtrust = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Safety & Trust
        </h2>
        <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          Your parent&apos;s safety is our priority. We combine police and
          background verification, clear emergency handling, and live journey
          updates so you always know what is happening on the ground.
        </p>
        <p className="text-center text-sm text-gray-500 mb-12 max-w-xl mx-auto">
          Sample screens below show the kind of WhatsApp-style updates families
          receive—they are examples only; your actual messages may vary by
          journey.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <Card className="p-5 text-center bg-blue-50/80 border-blue-100">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Typical response time
            </p>
            <p className="text-2xl font-bold text-blue-700">&lt; 5 min</p>
            <p className="text-xs text-gray-600 mt-1">
              Average first reply on WhatsApp during working hours
            </p>
          </Card>
          <Card className="p-5 text-center bg-blue-50/80 border-blue-100">
            <UserCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Families who chose us
            </p>
            <p className="text-2xl font-bold text-blue-700 leading-tight">
              Growing base
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Hundreds of pickup and companion journeys across Delhi NCR, with
              many families booking again when parents travel next
            </p>
          </Card>
          <Card className="p-5 text-center bg-blue-50/80 border-blue-100">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Verification
            </p>
            <p className="text-lg font-bold text-blue-700 leading-snug">
              Police + background
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Multi-step screening before anyone meets your parent
            </p>
          </Card>
          <Card className="p-5 text-center bg-blue-50/80 border-blue-100">
            <Siren className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Emergencies
            </p>
            <p className="text-lg font-bold text-amber-800">24/7 line</p>
            <p className="text-xs text-gray-600 mt-1">
              Escalation path if plans change or your parent needs help
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <Card className="p-6 md:p-8 border-l-4 border-blue-600">
            <div className="flex items-start gap-3 mb-4">
              <BadgeCheck className="w-9 h-9 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Background verification process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Every Care Companion is screened before they represent
                  Care2Home. We do not skip steps because a journey is urgent.
                </p>
              </div>
            </div>
            <ol className="space-y-3 text-sm text-gray-700 list-decimal pl-5 marker:font-semibold marker:text-blue-600">
              <li>
                <strong className="text-gray-900">Identity & documents</strong>{" "}
                — Government ID, photograph, and consistency checks.
              </li>
              <li>
                <strong className="text-gray-900">Address & references</strong>{" "}
                — Where applicable, residence context and reference callbacks.
              </li>
              <li>
                <strong className="text-gray-900">Police verification</strong>{" "}
                — Submitted and tracked per local norms for roles that meet
                seniors in person, in addition to our own checks.
              </li>
              <li>
                <strong className="text-gray-900">Training & onboarding</strong>{" "}
                — How to assist elderly travellers, communication with families,
                and escalation protocols.
              </li>
              <li>
                <strong className="text-gray-900">Ongoing standards</strong> —{" "}
                Serious incidents or repeated complaints are reviewed; we can
                remove a companion from active duty.
              </li>
            </ol>
          </Card>

          <Card className="p-6 md:p-8 border-l-4 border-amber-500">
            <div className="flex items-start gap-3 mb-4">
              <Siren className="w-9 h-9 text-amber-600 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Emergency handling
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Travel is unpredictable—trains run late, bags go missing, or
                  someone feels unwell. Here is how we think about emergencies.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  The Care Companion{" "}
                  <strong className="text-gray-900">
                    stays with your parent
                  </strong>{" "}
                  until a safe handover—never “dropping at the gate” and
                  disappearing.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900">Ops on WhatsApp / phone</strong>{" "}
                  coordinates changes with you: missed connections, reroutes, or
                  late-night arrivals.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>
                  If medical help or authorities are needed, we support{" "}
                  <strong className="text-gray-900">
                    clear communication and next steps
                  </strong>{" "}
                  with your family.
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 flex items-start gap-2">
              <PhoneCall className="w-4 h-4 shrink-0 mt-0.5" />
              Save our WhatsApp number at booking so you always have a direct
              line during the journey.
            </p>
          </Card>
        </div>

        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-2">
            Live journey updates
          </h3>
          <p className="text-center text-gray-600 text-sm max-w-xl mx-auto mb-10">
            Families receive timely messages as milestones happen—meet at
            terminal, in vehicle, approaching home, and handover complete.
          </p>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto items-start">
            <LiveUpdatePhoneMock
              title="Care2Home · Journey updates"
              messages={[
                "Companion has met your parent at T3 arrivals with name placard.",
                "Luggage collected. Walking to pre-paid pickup area now.",
                "In cab en route to Dwarka. ETA ~35 min. Traffic moderate.",
              ]}
            />
            <LiveUpdatePhoneMock
              title="Care2Home · Journey updates"
              messages={[
                "Train arrived 12 min late. Companion at platform as discussed.",
                "Your parent is seated in cab. Sharing live location separately.",
                "Reached society gate. Escorting inside—will confirm once home.",
              ]}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
          More ways we earn trust
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <UserCheck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ID you can verify
            </h3>
            <p className="text-gray-600">
              Companions carry official Care2Home ID. You can speak with them
              before the trip so your parent knows exactly who to expect.
            </p>
          </Card>

          <Card>
            <Bell className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Status in plain language
            </h3>
            <p className="text-gray-600">
              No jargon—just clear updates at key moments so you are not left
              guessing between “landed” and “safely inside.”
            </p>
          </Card>

          <Card>
            <MessageCircle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Direct contact
            </h3>
            <p className="text-gray-600">
              Reach the assigned companion and ops team before and during the
              journey when you need reassurance.
            </p>
          </Card>

          <Card>
            <Clock className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No rush, no stress
            </h3>
            <p className="text-gray-600">
              We plan for stairs, crowds, and tired travellers. Your
              parent&apos;s pace sets the schedule—not the meter.
            </p>
          </Card>

          <Card>
            <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No cash handling
            </h3>
            <p className="text-gray-600">
              Payments are arranged digitally with your family. Your parent is
              not asked to carry large cash for the service.
            </p>
          </Card>

          <Card>
            <MapPin className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Door-to-door mindset
            </h3>
            <p className="text-gray-600">
              We think in complete journeys—terminal or platform to a safe
              handover at home—because that is where anxiety actually ends.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Safetyandtrust;
