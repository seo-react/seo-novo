import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ServiceOne = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          'https://cms.seorocket.com.br/wp-json/wp/v2/services?per_page=8&_embed'
        );
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error('Erro ao carregar serviços:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="service-one pt-120">
      <div className="container">
        <div className="row">
          <div
            className="section-title__one text-center mb-50 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h2 className="section-title__one-title">
              Boost Your Online <br /> Presence with Our Expert
            </h2>
            <p className="section-title__one-subtitle">
              Curabitur nec turpis sit mi tempus Integer lobortis iaculis felis.
            </p>
          </div>
        </div>

        <div className="row g-0">
          {loading ? (
            <div className="text-center">Carregando serviços...</div>
          ) : services.length === 0 ? (
            <div className="text-center">Nenhum serviço encontrado.</div>
          ) : (
            services.map((service, index) => {
              const featuredImage =
                service._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                '/assets/img/icon/default.png';

              return (
                <div
                  key={service.id}
                  className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                >
                  <div className="service-one__single mb-30">
                    <div className={`service-one__icon bg-${(index % 4) + 1} mb-30`}>
                      <img src={featuredImage} alt={service.title.rendered} />
                    </div>
                    <h3
                      className="mb-35"
                      dangerouslySetInnerHTML={{ __html: service.title.rendered }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: service.excerpt.rendered,
                      }}
                    />
                    <div className="service-one__btn mt-50">
                      <Link
                        href={`/services/${service.slug}`}
                        className="rr-bounce-up"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="col-xl-12">
          <div
            className="service-page-link text-center mt-50 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <p>
              Check Out All of Our{' '}
              <Link href="/services">All features</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
