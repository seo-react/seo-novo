import '../styles/globals.css'; // ✅ Importação correta
import '../public/assets/css/fonts-override.css'; // ✅ Importa fontes com swap
import React, {useEffect} from 'react';
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from 'react-icons/fa';
import Head from "next/head";


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        setTimeout(() => {
          animationCreate();
        }, 500);
      }, []);
    return (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Portfólio de Abdiel - Desenvolvedor Web" />
            <link rel="preload" href="/assets/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/fa-light-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          </Head>
            <div className="page-wrapper">
              <Component {...pageProps} />
            </div>
            <ScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />}  />
        </>
    );
}

export default MyApp;