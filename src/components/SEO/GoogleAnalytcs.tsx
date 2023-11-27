import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-PFKLC7J0BH"}`}
    ></Script>
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-PFKLC7J0BH"
          }',
          {
            'cookie_prefix': 'Decolgen',
            'cookie_domain': 'www.decolgenlabs.com',
            'cookie_expires': 28 * 24 * 60 * 60 
          }
          );
          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
    </Script>
  </>
);
export default GoogleAnalytics;
