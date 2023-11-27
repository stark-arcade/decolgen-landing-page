import Head from 'next/head';
import { NextSeo, NextSeoProps } from 'next-seo';

export type SEOHeadType = {
  title?: string;
  siteName?: string;
  description?: string;
  favicon?: string;
  image?: string;
};

export default function SEOHead({
  description,
  favicon,
  siteName,
  title,
  image,
  ...rest
}: SEOHeadType & NextSeoProps) {
  const defaultSiteData: SEOHeadType = {
    favicon: process.env.favicon,
    title: process.env.title,
    siteName: process.env.siteName,
    description: process.env.description,
    image: process.env.image,
  };
  const meta = {
    favicon: favicon || process.env.favicon,
    title: title || process.env.title,
    siteName: siteName || process.env.siteName,
    description: description || process.env.description,
    image: image || process.env.image,
  };
  return (
    <>
      <Head>
        <link rel="icon" href={favicon || defaultSiteData.favicon} />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.ico" />
        <meta property="twitter:image" content={meta.image} />
        <meta property="twitter:description" content={meta.description} />
      </Head>
      <NextSeo
        title={meta.title}
        titleTemplate={`%s | ${meta.siteName}`}
        description={meta.description}
        openGraph={{
          description: meta.description,
          images: [
            {
              url: meta.image || '',
            },
          ],
          type: 'website',
          locale: 'en_IE',
          siteName: meta.siteName,
          title: meta.title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        {...rest}
      />
    </>
  );
}
