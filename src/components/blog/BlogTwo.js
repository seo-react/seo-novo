import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogTwo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://cms.seorocket.com.br/wp-json/wp/v2/posts?per_page=6&_embed'
        );
        if (!res.ok) throw new Error('Erro ao carregar posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* blog two start */}
      <div className="blog-two theme-gray-3 pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 text-center wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title__one-title">
                Trends and Predictions <br /> for Online Success.
              </h2>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">Carregando posts...</div>
            ) : posts.length === 0 ? (
              <div className="col-12 text-center">Nenhum post encontrado.</div>
            ) : (
              posts.map((post, i) => {
                const featuredImage =
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                  '/assets/img/blog/default.jpg';
                const date = new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                    <div className="blog-two__single mb-30 wow fadeInUp" data-wow-delay=".3s">
                      <div className="blog-two__single-content">
                        <div className="postbox__meta">
                          <span>
                            <i className="fa-light fa-calendar-lines"></i> {date}
                          </span>
                        </div>
                        <h2 className="blog-two__title">
                          <Link href={`/blog/${post.slug}`}>
                            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          </Link>
                        </h2>
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <Link href={`/blog/${post.slug}`} className="blog-two__btn">
                              Leia mais <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 text-end">
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa-light fa-share-nodes"></i>
                              </a>
                              <div className="share-option__hover">
                                <ul>
                                  <li>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {/* blog two end */}
    </>
  );
};

export default BlogTwo;
