import Head from "next/head";

const SEO = ({
  pageTitle = "Portfólio de Abdiel",
  description = "Desenvolvedor Web especializado em React e Next.js",
  image = "/images/default-preview.png",
  robots = "index, follow",
}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
);

export default SEO;
