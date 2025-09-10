import React from "react";
import { BrandOneData } from "@/data/brand";
import dynamic from "next/dynamic";

// Substituto moderno para o Owl Carousel
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const carouselOptions = {
  loop: true,
  nav: false,
  autoplay: true,
  responsive: {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 5 },
  },
};

const BrandOne = () => {
  return (
    <>
      {/* brand one start */}
      <div className="brand-one pt-80 pb-140 wow fadeInUp" data-wow-delay=".3s">
        <div className="container">
          <div className="row">
            <h2 className="brand-one__title">Trusted by 25,000+ companies</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <OwlCarousel className="brand-one__active owl-carousel" {...carouselOptions}>
                {BrandOneData.map((item, i) => (
                  <div key={i} className="brand-one__single">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </a>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* brand one end */}
    </>
  );
};

export default BrandOne;
