// pages/services/[slug].js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

// Ajuste o caminho abaixo conforme a localização real dos arquivos


export default function ServiceDetails({ service }) {
  if (!service) return <p>Serviço não encontrado</p>;

  return (
    <div className="service-details pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
          </div>
          <div className="col-xl-8">
            <div className="service-details-content">
              {service.featured_image && (
                <div className="service-details__img mb-40">
                  <img src={service.featured_image} alt={service.title.rendered} />
                </div>
              )}
              <h2
                className="service-details-title mb-20"
                dangerouslySetInnerHTML={{ __html: service.title.rendered }}
              />
              <div
                className="mb-50"
                dangerouslySetInnerHTML={{ __html: service.content.rendered }}
              />

              {/* Exemplo de FAQ vindo do ACF */}
              {service.acf?.faq && (
                <Accordion defaultActiveKey="0">
                  {service.acf.faq.map((item, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>{item.pergunta}</Accordion.Header>
                      <Accordion.Body>{item.resposta}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://cms.seorocket.com.br/wp-json/wp/v2/service');
  const services = await res.json();

  return {
    paths: services.map(s => ({ params: { slug: s.slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cms.seorocket.com.br/wp-json/wp/v2/service?slug=${params.slug}&_embed`
  );
  const data = await res.json();
  const service = data[0] || null;

  return {
    props: {
      service: service
        ? {
            ...service,
            featured_image:
              service._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
          }
        : null
    },
    revalidate: 60
  };
}
