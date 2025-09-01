import SEO from "../common/seo/Seo";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroTwo from "../components/hero/HeroTwo";
import ServiceTwo from "../components/service/ServiceTwo";
import StackedCardOne from "../components/stacked-card/StackedCardOne";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import BlogThree from "../components/blog/BlogThree";
import FooterTwo from "../common/footer/FooterTwo";

export default function HomeTwo() {
	return (
		<>
			<SEO pageTitle={"Home Two"} />
			<HeaderTwo />
			<HeroTwo />
			<ServiceTwo />
			<StackedCardOne />
			<TestimonialThree />
			<BlogThree />
			<FooterTwo /> 
		</>
	);
}