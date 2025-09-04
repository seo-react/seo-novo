// src/pages/blog/[slug].js
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

// Componentes de layout
import SEO from '../../common/seo/Seo';
import HeaderOne from '../../common/header/HeaderOne';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import FooterThree from '../../common/footer/FooterThree';

// Widgets do sidebar
import BlogSearch from '../../widgets/BlogSearch';
import BlogCategory from '../../widgets/BlogCategory';
import BlogLatestPost from '../../widgets/BlogLatestPost';
import BlogTags from '../../widgets/BlogTags';

export async function getStaticPaths() {
  try {
    const res = await fetch('https://cms.seorocket.com.br/wp-json/wp/v2/posts?per_page=100&_embed');
    const posts = await res.json();

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Erro em getStaticPaths:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://cms.seorocket.com.br/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
    );
    const posts = await res.json();

    if (!posts || posts.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        post: posts[0],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Erro em getStaticProps:', error);
    return { notFound: true };
  }
}

const BlogDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="text-center" style={{ padding: '100px 0' }}>
        Carregando...
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || 'Admin';
  const date = new Date(post.date).toLocaleDateString('pt-BR');

  return (
    <>
      <SEO pageTitle={post.title.rendered} />

      <HeaderOne />

      <Breadcrumb
        heading="Blog Details"
        currentPage="Blog Details"
      />

      <div className="blog-details pt-120 pb-60">
        <div className="container">
          <div className="row">
            {/* Conteúdo Principal */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog-details__left">
                {featuredImage && (
                  <div className="blog-details__img mb-25">
                    <img
                      src={featuredImage}
                      alt={post.title.rendered}
                      style={{ width: '100%', borderRadius: '8px' }}
                    />
                  </div>
                )}

                <div className="blog-details__content">
                  <div className="blog-details__meta mb-20">
                    <ul>
                      <li>
                        <i className="fa-light fa-calendar-lines"></i>
                        <span>{date}</span>
                      </li>
                      <li>
                        <i className="fa-light fa-user-large"></i>
                        <Link href="/team">{authorName}</Link>
                      </li>
                    </ul>
                  </div>

                  <h2
                    className="postbox__title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    style={{ lineHeight: '1.8' }}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar">
                <BlogSearch />
                <BlogLatestPost />
                <BlogCategory />
                <BlogTags />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterThree />
    </>
  );
};

export default BlogDetails;