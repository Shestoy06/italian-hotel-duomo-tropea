import React, {useEffect, useRef} from 'react';
import {EffectCoverflow, Pagination, Mousewheel} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

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
            mousewheel={{ forceToAxis: true }}

            pagination={true}
            modules={[EffectCoverflow, Pagination, Mousewheel]}
            className="mySwiper"
        >
            {slides}
        </Swiper>
    );
};

export default Slider;