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
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          gtag('config', '${
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-PFKLC7J0BH"
          }');
          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
    </Script>
  </>
);
export default GoogleAnalytics;
