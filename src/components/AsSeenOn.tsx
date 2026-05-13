import Link from "next/link";
import { Rocket, Newspaper, HeartHandshake } from "lucide-react";

const outlets = [
  {
    icon: Rocket,
    title: "Startup & product directories",
    description:
      "We are listing Care2Home on Indian and global startup discovery platforms so families searching for innovative elder-travel help can find a verified service—not just random leads.",
  },
  {
    icon: Newspaper,
    title: "Local blogs & Delhi NCR guides",
    description:
      "We are reaching out to community blogs, city guides, and parent groups that cover travel, mobility, and life in Delhi NCR—small mentions still build trust when someone is choosing care for the first time.",
  },
  {
    icon: HeartHandshake,
    title: "Elderly care directories",
    description:
      "Senior care resource hubs and caregiver directories are a natural fit. We are submitting Care2Home wherever families look for safe escorts, station help, and airport assistance for ageing parents.",
  },
] as const;

const AsSeenOn = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
          As seen on & in the community
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
          Even a short listing or blog mention helps families discover
          trustworthy pickup support. We are actively pursuing visibility on the
          channels below—logos and links will appear here as partnerships go
          live.
        </p>
        <p className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-12">
          Have a publication, directory, or podcast that should feature Care2Home?
          We would love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {outlets.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-700" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                {description}
              </p>
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-6 px-4 text-center text-xs text-slate-500 font-medium">
                Logo / link slot — coming soon
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition"
          >
            Media & directory enquiries
          </Link>
          <a
            href="mailto:info@care2home.co?subject=Care2Home%20listing%20or%20feature"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            info@care2home.co
          </a>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
