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

        {/* Estilos críticos (carregamento imediato) */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/seoq-core.css" />

        {/* Estilos não críticos (adiados) */}
        {[
          'style.css',
          'animate.min.css',
          'fontawesome-all.min.css',
          'magnific-popup.css',
          'nice-select.css',
          'owl.carousel.min.css',
          'slick.css',
          'swiper-bundle.min.css',
          'seoq-unit.css',
          'seoq-updater.css',
        ].map((file) => (
          <link
            key={file}
            rel="stylesheet"
            href={`/assets/css/${file}`}
            media="print"
            onLoad="this.media='all'"
          />
        ))}

        {/* Fallback para navegadores sem JS */}
        <noscript>
          {[
            'style.css',
            'animate.min.css',
            'fontawesome-all.min.css',
            'magnific-popup.css',
            'nice-select.css',
            'owl.carousel.min.css',
            'slick.css',
            'swiper-bundle.min.css',
            'seoq-unit.css',
            'seoq-updater.css',
          ].map((file) => (
            <link
              key={file}
              rel="stylesheet"
              href={`/assets/css/${file}`}
            />
          ))}
        </noscript>
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
