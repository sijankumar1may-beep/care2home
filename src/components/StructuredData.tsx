import Head from "next/head";

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Head>
      <script
        id={id}
        type="application/ld+json"
        // JSON-LD must be embedded as raw JSON text.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
