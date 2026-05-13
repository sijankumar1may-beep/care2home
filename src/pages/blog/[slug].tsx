import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import SEO from "@/components/Seo";
import StructuredData from "@/components/StructuredData";
import BlogBlocks from "@/components/BlogBlocks";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  type BlogPost,
} from "@/data/blogPosts";

interface BlogPostPageProps {
  post: BlogPost;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const url = `https://www.care2home.co/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Care2Home",
      url: "https://www.care2home.co/",
    },
    publisher: {
      "@type": "Organization",
      name: "Care2Home",
      logo: {
        "@type": "ImageObject",
        url: "https://www.care2home.co/care2homefavicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
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
        name: "Blog",
        item: "https://www.care2home.co/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${post.title} | Care2Home Blog`}
        description={post.description}
        canonical={url}
      />
      <StructuredData
        id={`blog-article-${post.slug}`}
        data={articleSchema}
      />
      <StructuredData
        id={`blog-breadcrumb-${post.slug}`}
        data={breadcrumbSchema}
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-3xl md:mx-8 px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <Link href="/blog" className="hover:text-blue-700">
              Blog
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-gray-700">Article</span>
          </nav>

          <header className="mb-10">
            <p className="text-sm text-gray-500 mb-3">
              {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
          </header>

          <BlogBlocks blocks={post.blocks} />

          <footer className="mt-14 pt-10 border-t border-gray-200">
            <p className="text-gray-700 mb-6">
              Care2Home offers verified Care Companions for airport and railway
              pickup for elderly parents across Delhi NCR—with live updates for
              your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-service"
                className="inline-flex justify-center items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
              >
                Book a Care Companion
              </Link>
              <Link
                href="/blog"
                className="inline-flex justify-center items-center rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                More articles
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};
