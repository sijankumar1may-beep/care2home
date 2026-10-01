import Link from "next/link";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import type { HomeVideoPageConfig } from "@/lib/home-videos";
import {
  getHomeVideoCanonical,
  getYoutubeThumbnailUrl,
} from "@/lib/home-videos";

type HomeVideoPageProps = {
  config: HomeVideoPageConfig;
  breadcrumbLabel: string;
};

export default function HomeVideoPage({
  config,
  breadcrumbLabel,
}: HomeVideoPageProps) {
  const canonical = getHomeVideoCanonical(config);
  const thumbnailUrl = getYoutubeThumbnailUrl(config.youtubeId);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    name: config.pageTitle,
    url: canonical,
    description: config.seoDescription,
    isPartOf: {
      "@id": "https://www.care2home.co/#website",
    },
    about: {
      "@id": "https://www.care2home.co/#organization",
    },
  };

  const breadcrumbSchema = {
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
        name: breadcrumbLabel,
        item: canonical,
      },
    ],
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${canonical}#video`,
    name: config.videoName,
    description: config.videoDescription,
    thumbnailUrl,
    embedUrl: `https://www.youtube.com/embed/${config.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${config.youtubeId}`,
    publisher: {
      "@type": "Organization",
      "@id": "https://www.care2home.co/#organization",
      name: "Care2Home",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        canonical={canonical}
        ogImage={thumbnailUrl}
        ogType="video.other"
      />
      <StructuredData id="video-webpage-schema" data={webPageSchema} />
      <StructuredData id="video-breadcrumb-schema" data={breadcrumbSchema} />
      <StructuredData id="video-object-schema" data={videoSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-700 underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{breadcrumbLabel}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          {config.heading}
        </h1>

        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
          <iframe
            src={config.embedSrc}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Care Companion
          </Link>
          <p className="mt-4">
            <Link href="/" className="text-blue-700 underline hover:text-blue-900">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
