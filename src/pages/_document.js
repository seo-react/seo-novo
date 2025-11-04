import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Otimização de fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/logo/favicon.png"
        />
        <link
          rel="manifest"
          href="/assets/images/favicons/site.webmanifest"
        />

        {/* Estilos carregados normalmente para garantir estabilidade */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/seoq-core.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/seoq-unit.css" />
        <link rel="stylesheet" href="/assets/css/seoq-updater.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Scripts JS */}
        {[
          'jquery-3.6.0.min.js',
          'bootstrap.bundle.min.js',
          'imagesloaded.pkgd.min.js',
          'isotope.pkgd.min.js',
          'jquery.appear.min.js',
          'jquery.countup.min.js',
          'jquery.magnific-popup.min.js',
          'jquery.waypoints.min.js',
          'nice-select.js',
          'owl.carousel.min.js',
          'slick.min.js',
          'swiper-bundle.min.js',
          'wow.min.js',
          'main.js',
        ].map((file) => (
          <script key={file} src={`/assets/js/${file}`}></script>
        ))}
      </body>
    </Html>
  );
}
