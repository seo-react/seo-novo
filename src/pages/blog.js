import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbTwo from "../common/breadcrumb/BreadcrumbTwo";
import BlogGrid from "../components/blog/BlogGrid";
import FooterThree from "../common/footer/FooterThree";

export default function BlogPage({ initialPosts, initialTotalPages }) {
  return (
    <>
      <SEO pageTitle={"Blog Page"} />
      <HeaderOne />
      <BreadcrumbTwo
        heading="The SEO Ranking Blog"
        currentPage="Stay Updated with the Latest News and Best Strategies"
      />
      <BlogGrid initialPosts={initialPosts} initialTotalPages={initialTotalPages} />
      <FooterThree />
    </>
  );
}

// 🔄 Server-side fetch dos posts da categoria inicial
export async function getServerSideProps() {
  const categoryId = 3; // Search Engine
  const currentPage = 1;

  try {
    const res = await fetch(
      `https://cms.seorocket.com.br/wp-json/wp/v2/posts?categories=${categoryId}&page=${currentPage}&per_page=6&_embed`
    );

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    const posts = await res.json();

    return {
      props: {
        initialPosts: posts,
        initialTotalPages: totalPages,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      props: {
        initialPosts: [],
        initialTotalPages: 1,
      },
    };
  }
}
