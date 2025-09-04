import Link from 'next/link';
import SEO from '../../common/seo/Seo';
import HeaderOne from '../../common/header/HeaderOne';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import FooterThree from '../../common/footer/FooterThree';

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://cms.seorocket.com.br/wp-json/wp/v2/posts?per_page=10&_embed'
    );
    const posts = await res.json();

    return {
      props: { posts },
      revalidate: 60, // revalida a cada 1 min
    };
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return { props: { posts: [] } };
  }
}

export default function BlogList({ posts }) {
  return (
    <>
      <SEO pageTitle="Blog" />
      <HeaderOne />
      <Breadcrumb heading="Blog" currentPage="Blog" />

      <div className="blog-list pt-120 pb-60">
        <div className="container">
          <div className="row">
            {posts.map((post) => {
              const featuredImage =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const date = new Date(post.date).toLocaleDateString('pt-BR');

              return (
                <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="blog-card">
                    {featuredImage && (
                      <img
                        src={featuredImage}
                        alt={post.title.rendered}
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    <div className="blog-card-content">
                      <span className="blog-date">{date}</span>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                      <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FooterThree />
    </>
  );
}
