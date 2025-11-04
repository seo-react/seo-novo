import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TestimonialOneData } from '@/data/testimonial';

const TestimonialFive = () => {
  return (
    <>
      {/* testimonial one start */}
      <div className="testimonial-one pt-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title__one text-center mb-60">
                <h2 className="section-title__one-title">
                  What Clients Say About <br /> Our SEO Services.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-one__active"
        >
          {TestimonialOneData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-wrapper">
                  <div className="testimonial-one__single-img">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="testimonial-one__single-content">
                    <div className="testimonial-one__video">
                      <div className="icon">
                        <a href={item.video_link} className="popup-video">
                          <img src="/assets/img/icon/play-icon.svg" alt="play icon" /> Watch The Video
                        </a>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <h4>{item.name}</h4>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* testimonial two end */}
    </>
  );
};

export default TestimonialFive;
