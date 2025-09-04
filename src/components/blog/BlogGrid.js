// components/blog/BlogGrid.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Mapeamento de categorias do WordPress (ajuste os IDs conforme seu CMS)
const CATEGORY_MAP = {
  'Search Engine': 3,
  'Analytics': 4,
  'Social Media': 5,
  'Content Marketing': 6,
  'Management': 7,
  'Optimization': 8,
  'Digital Marketing': 9, // Ajuste se for diferente — original tinha 7 repetido
};

// Função auxiliar para mapear ícones
function getIconName(category) {
  const icons = {
    'Search Engine': 'globe',
    'Analytics': 'list',
    'Social Media': 'like-tag',
    'Content Marketing': 'pen',
    'Management': 'trend-up',
    'Optimization': 'keyboard-open',
    'Digital Marketing': 'status-up',
  };
  return icons[category] || 'globe';
}

const BlogGrid = () => {
  const [activeTab, setActiveTab] = useState('Search Engine');
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const categoryId = CATEGORY_MAP[activeTab];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://cms.seorocket.com.br/wp-json/wp/v2/posts?categories=${categoryId}&page=${currentPage}&per_page=6&_embed`
        );

        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || 1);
        if (!res.ok) throw new Error('Erro ao carregar posts');

        const data = await res.json();
        setPosts(data);
        setTotalPages(totalPages);
      } catch (err) {
        console.error(err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeTab, currentPage]);

  // Rolar para o topo ao mudar aba ou página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="blog-one pb-140">
        <div className="tabs-one">
          {/* Tabs de Categoria */}
          <div className="blog-category-tabs pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12 text-center">
                  <ul className="nav nav-pills mb-100" id="pills-tab" role="tablist">
                    {Object.keys(CATEGORY_MAP).map((category) => (
                      <li className="nav-item" role="presentation" key={category}>
                        <button
                          className={`nav-link ${activeTab === category ? 'active' : ''}`}
                          onClick={() => {
                            setActiveTab(category);
                            setCurrentPage(1);
                          }}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${category.toLowerCase().replace(/\s+/g, '-')}`}
                          aria-selected={activeTab === category}
                        >
                          <img
                            src={`/assets/img/icon/${getIconName(category)}.svg`}
                            className="no-active"
                            alt={category}
                          />
                          <img
                            src={`/assets/img/icon/${getIconName(category)}-white.svg`}
                            className="active-tab-icon"
                            alt={category}
                          />
                          <span>{category}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo dos Posts (com tab-style) */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="tab-content" id="pills-tabContent">
                {/* Tab Ativa Dinâmica */}
                <div
                  className="tab-pane show active fadeInUp"
                  id={`pills-${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
                  role="tabpanel"
                  aria-labelledby={`pills-${activeTab.toLowerCase().replace(/\s+/g, '-')}-tab`}
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      {loading ? (
                        <div className="col-12 text-center">Carregando posts...</div>
                      ) : posts.length === 0 ? (
                        <div className="col-12 text-center">Nenhum post encontrado nesta categoria.</div>
                      ) : (
                        posts.map((post) => {
                          const featuredImage =
                            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                            '/assets/img/blog/default.jpg';
                          const date = new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          });

                          return (
                            <div
                              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
                              key={post.id}
                            >
                              <div className="blog-grid__single mb-30">
                                <div className="blog-grid__single-img">
                                  <Link href={`/blog/${post.slug}`}>
                                    <img src={featuredImage} alt={post.title.rendered} />
                                  </Link>
                                </div>
                                <div className="blog-grid__single-content">
                                  <div className="postbox__meta">
                                    <span>
                                      <i className="fa-light fa-calendar-lines"></i> {date}
                                    </span>
                                  </div>
                                  <h2>
                                    <Link
                                      href={`/blog/${post.slug}`}
                                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                  </h2>
                                  <div className="btn-box postbox__read-more">
                                    <Link href={`/blog/${post.slug}`} className="tp-btn postbox__more-btn">
                                      Read More <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
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
              </div>
            </div>
          </div>

          {/* Paginação */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="basic-pagination text-center mt-40">
                <nav>
                  <ul>
                    <li>
                      <button
                        className="prev"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 || loading}
                      >
                        <i className="fa-regular fa-arrow-left"></i>
                        <span>Prew</span>
                      </button>
                    </li>
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      return (
                        <li key={page}>
                          {page === currentPage ? (
                            <span className="current">{page}</span>
                          ) : (
                            <button onClick={() => handlePageChange(page)}>
                              <span>{page}</span>
                            </button>
                          )}
                        </li>
                      );
                    })}
                    <li>
                      <button
                        className="next"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages || loading}
                      >
                        <span>Next</span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;