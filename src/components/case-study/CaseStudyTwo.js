import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CaseStudyTwoData } from '@/data/case-study';
import Link from 'next/link';

const CaseStudyOne = () => {
  return (
    <>
      {/* case study two start */}
      <div className="case-study-two theme-gray-2 pb-140">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="case-study-two__active"
        >
          {CaseStudyTwoData.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="case-study-two__single"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="case-study-two__single-box">
                  <span>{item.subheading}</span>
                  <h4>{item.heading}</h4>
                  <Link href={item.link}>{item.link_text}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* case study two end */}
    </>
  );
};

export default CaseStudyOne;
