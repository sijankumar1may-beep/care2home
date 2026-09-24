import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.care2home";

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              Parents arriving today or tomorrow?
              <span className="block mt-3">
                We personally
                <span className="text-blue-700">
                  {" "}
                  receive them at the station/airport and drop them home safely
                </span>
                — and also
                <span className="text-green-700">
                  {" "}
                  receive them at home and drop them at the station/airport
                </span>
                .
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              A trained Care Companion provides senior citizen airport assistance
              and station support across India—with strong coverage in Delhi
              NCR. Airport pickup for elderly parents, railway station pickup
              for senior citizens, or the reverse journey—with live updates for
              you. It&apos;s a parent companion service and elderly travel
              assistance: a safe pickup service for parents when you can&apos;t
              be at the gate yourself.
            </p>

            <ul className="flex flex-col sm:flex-row gap-4 text-gray-700 mb-8">
              <li
                className="flex items-center gap-2 animate-fade-in-up"
                style={{ animationDelay: "180ms" }}
              >
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Background-verified companions
              </li>
              <li
                className="flex items-center gap-2 animate-fade-in-up"
                style={{ animationDelay: "220ms" }}
              >
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l7 7-7 7-7-7 7-7z"></path>
                </svg>
                Doorstep responsibility
              </li>
              <li
                className="flex items-center gap-2 animate-fade-in-up"
                style={{ animationDelay: "260ms" }}
              >
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                Live journey updates
              </li>
            </ul>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="https://wa.me/919910646415?text=Hi%20I%20need%20parent%20pickup%20service."
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-green-600 bg-green-600 text-white text-lg font-medium hover:bg-green-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Talk on WhatsApp
              </a>
              <Link
                href="/book-service"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 text-black text-lg font-medium hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                Book Online
              </Link>
              <Link
                href="/pricing"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 bg-blue-800 text-white text-lg font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Calculate Your Price
              </Link>
            </div>
            <p
              className="text-sm text-black mt-2 animate-fade-in-up"
              style={{ animationDelay: "360ms" }}
            >
              Parents arriving today? Book instantly.
            </p>
            <p
              className="text-sm text-gray-500 mt-6 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Available across India • Delhi NCR hub • Avg response time under
              5 minutes
            </p>
          </div>

          <div
            className="relative order-1 md:order-2 animate-scale-in"
            style={{ animationDelay: "120ms" }}
          >
            <Image
              src="/servcefinal.png"
              alt="Care companion assisting elderly parent during travel"
              className="rounded-2xl shadow-lg"
              width={800}
              height={800}
            />
            <p className="text-xs text-gray-400 text-center mt-2">
              Illustrative image
            </p>
            <div
              className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-fade-in-up"
              style={{ animationDelay: "280ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Trusted by many families
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Safe & verified travel care companions
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-6 text-center animate-fade-in-up"
              style={{ animationDelay: "360ms" }}
            >
              <p className="text-gray-900 font-semibold mb-3 text-base md:text-lg">
                Download our Android App
              </p>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={70}
                  className="h-auto mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
