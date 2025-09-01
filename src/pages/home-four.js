import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import HeroFour from "../components/hero/HeroFour";
import ServiceThree from "../components/service/ServiceThree";
import HorizontalAccordion from "../components/horizontal-accordion/HorizontalAccordion";
import CounterOne from "../components/counter/CounterOne";
import SkillsOne from "../components/skills/SkillsOne";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import QuoteFormTwo from "../components/quote-form/QuoteFormTwo";
import BlogOne from "../components/blog/BlogOne";
import FooterFour from "../common/footer/FooterFour";

export default function HomeThree() {
	return (
		<>
			<SEO pageTitle={"Home Three"} />
			<HeaderFour />
			<HeroFour />
			<ServiceThree />
			<HorizontalAccordion />
			<CounterOne />
			<SkillsOne />
			<TestimonialTwo />
			<QuoteFormTwo />
			<BlogOne /> 
			<FooterFour />
		</>
	);
}