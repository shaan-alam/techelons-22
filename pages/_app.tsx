import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";

import * as ga from "../lib/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ParallaxProvider>
        <NextNProgress color="#ff5101" />
        <Component {...pageProps} />
      </ParallaxProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
    </>
  );
}

export default MyApp;
