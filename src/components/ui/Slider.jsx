import React from 'react';
import {EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

const Slider = ({slides}) => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {slides.map(slide => (
                <SwiperSlide >
                    <div style={{borderRadius: 5, border: '1px solid black'}}>
                        <img src={slide.image}/>
                    </div>
                    <div style={{position: 'absolute', left: 20, bottom: 20, fontSize: 18, color: "white"}}>
                        {slide.title}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;