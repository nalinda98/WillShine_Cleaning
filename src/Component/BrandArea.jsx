"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BrandArea = () => {
  const brands = [
    "img/brand/brand1.png",
    "img/brand/brand2.png",
    "img/brand/brand3.png",
    "img/brand/brand4.png",
    "img/brand/brand5.png",
  ];

  return (
    <div>
      <section className="brand-wrap-layout1">
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="heading-layout1">
            <h2>Certifications & Partners You Can Trust</h2>
            <p>
              We’re proud to be certified, insured, and trusted by
              industry-leading organizations, ensuring safety, quality, and
              professionalism in every service.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {brands.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="brand-box-layout1">
                  <div className="item-img">
                    <img src={src} alt={`Brand ${index + 1}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default BrandArea;
