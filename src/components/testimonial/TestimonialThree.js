import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TestimonialThreeData } from '@/data/testimonial';

const TestimonialThree = () => {
  return (
    <>
      {/* testimonial three start */}
      <div className="testimonial-three pt-110 pb-10 mb-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="d__column-two testimonial-border">
                <h2 className="testimonial-three_section__title">What Our Clients Say</h2>
                <div className="testimonial-rating">
                  <div className="star-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span>4000+ Clients Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-three__wrapper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="testimonial-three__active"
                >
                  {TestimonialThreeData.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonial-three__single">
                        <img src={item.image_logo} alt={item.image_logo_alt} />
                        <p>{item.description}</p>
                        <div className="author-info">
                          <div className="img">
                            <img src={item.image} alt={item.alt} />
                          </div>
                          <div className="content">
                            <h4>{item.name}</h4>
                            <span>{item.position}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial-three__img">
                  <img src="/assets/img/testimonial/quote-right.png" alt="quote icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial three end */}
    </>
  );
};

export default TestimonialThree;
