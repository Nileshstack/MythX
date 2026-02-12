// components/GoogleAnalytics.tsx
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-KPGJDKQ5L2';

export const GoogleAnalytics = () => {
  return (
    <>
      {/* Load gtag.js from Google */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Inline gtag configuration */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};
