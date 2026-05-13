import Link from "next/link";
import type { GetStaticProps } from "next";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import { getAllBlogPosts } from "@/data/blogPosts";

export interface BlogIndexPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTimeMinutes: number;
}

interface BlogIndexProps {
  posts: BlogIndexPost[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex({ posts }: BlogIndexProps) {
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
        name: "Blog",
        item: "https://www.care2home.co/blog",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Blog | Safe Travel for Elderly Parents & Senior Citizens | Care2Home"
        description="Guides for families and NRIs: airport and railway pickup for elderly parents, travel checklists, senior citizen travel tips, and companion services in Delhi NCR."
        canonical="https://www.care2home.co/blog"
      />
      <StructuredData id="blog-index-breadcrumb" data={breadcrumbSchema} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-3xl md:mx-8 px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
            Care2Home Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Safe travel for parents & seniors
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Practical, compassionate articles for families helping elderly
            parents travel alone, NRIs coordinating arrivals in India, and
            anyone comparing airport assistance with door-to-door companion
            care in Delhi NCR.
          </p>

          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.publishedAt)} · {post.readTimeMinutes}{" "}
                    min read
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl bg-gray-800 text-white p-8 text-center">
            <p className="text-lg mb-4">
              Need airport or railway pickup for a parent in Delhi NCR?
            </p>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Book a Care Companion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllBlogPosts()
    .map(
      ({
        slug,
        title,
        excerpt,
        publishedAt,
        readTimeMinutes,
      }): BlogIndexPost => ({
        slug,
        title,
        excerpt,
        publishedAt,
        readTimeMinutes,
      })
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return { props: { posts } };
};
