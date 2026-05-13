import type { BlogBlock } from "@/data/blogPosts";

export default function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-xl font-semibold text-gray-900 mt-8 mb-3"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc pl-6 space-y-2 text-gray-700 mb-6 marker:text-blue-600"
              >
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
