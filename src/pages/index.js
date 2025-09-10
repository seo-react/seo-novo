import dynamic from 'next/dynamic';
import SEO from "../common/seo/Seo";

// Carregamento dinâmico dos componentes
const HeaderOne = dynamic(() => import("../common/header/HeaderOne"), { ssr: false });
const HeroOne = dynamic(() => import("../components/hero/HeroOne"));
const AboutOne = dynamic(() => import("../components/about/AboutOne"));
const BrandOne = dynamic(() => import("../components/brand/BrandOne"));
const FaqTwo = dynamic(() => import("../components/faq/FaqTwo"));
const FaqThree = dynamic(() => import("../components/faq/FaqThree"));
const IntegrationsOne = dynamic(() => import("../components/integrations/IntegrationsOne"));
const BlogTwo = dynamic(() => import("../components/blog/BlogTwo"));
const CtaOne = dynamic(() => import("../components/cta/CtaOne"));
const FooterOne = dynamic(() => import("../common/footer/FooterOne"));

export default function Home() {
    return (
        <>
            <SEO pageTitle="Home One" />
            <HeaderOne />
            <HeroOne />
            <AboutOne />
            <BrandOne />
            <FaqTwo />
            <FaqThree />
            <IntegrationsOne />
            <BlogTwo />
            <CtaOne />
            <FooterOne />
        </>
    );
}
