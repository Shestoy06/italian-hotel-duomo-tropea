import React, {useEffect, useRef} from 'react';
import {EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { register } from 'swiper/element/bundle';

const Slider = ({slides}) => {
    const swiperRef = useRef(null);
    useEffect(() => {
        swiperRef.current.swiper.slideTo(1);
    }, []);
    return (
        <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}

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
            {slides}
        </Swiper>
    );
};

export default Slider;