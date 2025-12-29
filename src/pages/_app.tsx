import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D34L8EG2LC"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D34L8EG2LC');
  `}
      </Script>
      <Component {...pageProps} />;
    </Layout>
  );
}
