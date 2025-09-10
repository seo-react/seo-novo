import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";
import BrandOne from "../components/brand/BrandOne";
import FaqTwo from "../components/faq/FaqTwo";
import FaqThree from "../components/faq/FaqThree";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
import BlogTwo from "../components/blog/BlogTwo";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Home One"} />
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