import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
  {/* Otimização de fonts */}
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />

  {/* Favicons */}
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logo/favicon.png" />
  <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

  {/* Estilos externos otimizados */}
  <link rel="preload" href="/assets/css/style.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/animate.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/fontawesome-all.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/magnific-popup.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/nice-select.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/owl.carousel.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/slick.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/swiper-bundle.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/seoq-core.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/seoq-unit.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
  <link rel="preload" href="/assets/css/seoq-updater.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />

  {/* Fallback para navegadores sem JS */}
  <noscript>
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/animate.min.css" />
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
    <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
    <link rel="stylesheet" href="/assets/css/nice-select.css" />
    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="/assets/css/slick.css" />
    <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/css/seoq-core.css" />
    <link rel="stylesheet" href="/assets/css/seoq-unit.css" />
    <link rel="stylesheet" href="/assets/css/seoq-updater.css" />
  </noscript>
</Head>
            <body>
                <Main />
                <NextScript />
                <script src="/assets/js/jquery-3.6.0.min.js"></script>
<script src="/assets/js/bootstrap.bundle.min.js"></script>
<script src="/assets/js/imagesloaded.pkgd.min.js"></script>
<script src="/assets/js/isotope.pkgd.min.js"></script>
<script src="/assets/js/jquery.appear.min.js"></script>
<script src="/assets/js/jquery.countup.min.js"></script>
<script src="/assets/js/jquery.magnific-popup.min.js"></script>
<script src="/assets/js/jquery.waypoints.min.js"></script>
<script src="/assets/js/nice-select.js"></script>
<script src="/assets/js/owl.carousel.min.js"></script>
<script src="/assets/js/slick.min.js"></script>
<script src="/assets/js/swiper-bundle.min.js"></script>
<script src="/assets/js/wow.min.js"></script>

<script src="/assets/js/main.js"></script>

            </body>
        </Html>
    )
}
