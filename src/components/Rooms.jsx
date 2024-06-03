import React from 'react';
import s from "./Main/Main.module.css";
import {EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import LandscapeIcon from '@mui/icons-material/Landscape';
import DeckIcon from '@mui/icons-material/Deck';

import {Service} from "./About";
import AnimationFadeIn from "./ui/AnimationFadeIn";


const Rooms = () => {
    return (
        <div className={s.section}>
            <span className={s.section_title}>Camere</span>
            <AnimationFadeIn>
                <div>
                    Le nostre camere offrono il massimo comfort e sono dotate di tutti i servizi necessari per rendere
                    il vostro soggiorno piacevole e rilassante.
                </div>
            </AnimationFadeIn>
            <AnimationFadeIn>
                <div>
                    Ogni camera dispone di aria condizionata e di una doccia moderna.
                    Alcune camere offrono una vista spettacolare sul centro della città, sulle montagne circostanti o su una
                    terrazza privata,
                    ideale per rilassarsi e godersi il panorama.
                </div>
            </AnimationFadeIn>

            <AnimationFadeIn>
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
                    <SwiperSlide>
                        <div style={{
                            borderRadius: 10,
                            border: '1px solid black',
                            padding: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#fff2d5'
                        }}>
                            <div style={{position: 'relative', marginBottom: 10}}>
                                <img style={{width: '100%', borderRadius: 5, border: '1px solid black'}}
                                     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/103012159.jpg?k=c6b4afc3ae0fdb8a0b55916e7b32add1e6fcdb01fde193bc3dad00f1f5395f36&o="
                                     alt=""/>
                                <div style={{position: 'absolute', left: 20, bottom: 10, color: 'white'}}>Camera
                                    Matrimoniale Superior
                                </div>

                            </div>
                            <div style={{display: "flex", flexWrap: 'wrap', gap: 2, marginBottom: 20}}>
                                <Service>
                                    <FullscreenIcon/>
                                    30m2
                                </Service>
                                <Service>
                                    <LocationCityIcon/>
                                    Vista città
                                </Service>
                                <Service>
                                    <VolumeOffIcon/>
                                    Insonorizzazione
                                </Service>
                                <Service>
                                    <BedIcon/>
                                    1 letto singolo e 1 letto matrimoniale large
                                </Service>
                                <Service>
                                    <PersonIcon/>
                                    3-4 ospiti
                                </Service>
                            </div>

                            <a href="https://www.booking.com/hotel/it/residenza-il-duomo.it.html?aid=318615&label=New_English_EN_FR_21457884145-eZyGpUGIc30QQgiK8gzijQS640819035024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55454946675%3Atidsa-303472602395%3Alp9055338%3Ali%3Adec%3Adm%3Aag21457884145%3Acmp339900145&sid=797b34089b6a504fcbc05cf31750c8e8&dest_id=-131408;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1717361868;srpvid=e5089363b0ea0202;type=total;ucfs=1&"
                               className={`button-booking`}>
                                Prenota su Booking
                                <img src="https://seekvectors.com/files/download/booking.com-logo.png"
                                     style={{height: 20, width: 20}} alt=""/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            borderRadius: 10,
                            border: '1px solid black',
                            padding: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#fff2d5'

                        }}>
                            <div style={{position: 'relative', marginBottom: 10}}>
                                <img style={{width: '100%', borderRadius: 5, border: '1px solid black'}}
                                     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43222587.jpg?k=ae28f6f8828103d5368bab7f0ff3baff296baad71f3ded5deac616c7ac956420&o=" alt=""/>
                                <div style={{position: 'absolute', left: 20, bottom: 10, color: 'white'}}>Camera
                                    Camera Matrimoniale Standard
                                </div>

                            </div>
                            <div style={{display: "flex", flexWrap: 'wrap', gap: 2, marginBottom: 20}}>
                                <Service>
                                    <FullscreenIcon/>
                                    22m2
                                </Service>
                                <Service>
                                    <VolumeOffIcon/>
                                    Insonorizzazione
                                </Service>
                                <Service>
                                    <BedIcon/>
                                    1 letto matrimoniale large
                                </Service>
                                <Service>
                                    <PersonIcon/>
                                    1-2 ospiti
                                </Service>
                            </div>
                            <a href="https://www.booking.com/hotel/it/residenza-il-duomo.it.html?aid=318615&label=New_English_EN_FR_21457884145-eZyGpUGIc30QQgiK8gzijQS640819035024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55454946675%3Atidsa-303472602395%3Alp9055338%3Ali%3Adec%3Adm%3Aag21457884145%3Acmp339900145&sid=797b34089b6a504fcbc05cf31750c8e8&dest_id=-131408;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1717361868;srpvid=e5089363b0ea0202;type=total;ucfs=1&"
                               className={`button-booking`}>
                                Prenota su Booking
                                <img src="https://seekvectors.com/files/download/booking.com-logo.png"
                                     style={{height: 20, width: 20}} alt=""/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            borderRadius: 10,
                            border: '1px solid black',
                            padding: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#fff2d5'

                        }}>
                            <div style={{position: 'relative', marginBottom: 10}}>
                                <img style={{width: '100%', borderRadius: 5, border: '1px solid black'}}
                                     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/32718702.jpg?k=ad1706bd05c51162e6c3ec688891446e7d1937d81faeccb129e6f1e8fb24e249&o=" alt=""/>
                                <div style={{position: 'absolute', left: 20, bottom: 10, color: 'white'}}>Camera
                                    Camera Tripla Standard
                                </div>

                            </div>
                            <div style={{display: "flex", flexWrap: 'wrap', gap: 2, marginBottom: 20}}>
                                <Service>
                                    <FullscreenIcon/>
                                    30m2
                                </Service>
                                <Service>
                                    <VolumeOffIcon/>
                                    Insonorizzazione
                                </Service>
                                <Service>
                                    <BedIcon/>
                                    1 letto singoloe1 letto matrimoniale large
                                </Service>
                                <Service>
                                    <PersonIcon/>
                                    3 ospiti
                                </Service>
                            </div>
                            <a href="https://www.booking.com/hotel/it/residenza-il-duomo.it.html?aid=318615&label=New_English_EN_FR_21457884145-eZyGpUGIc30QQgiK8gzijQS640819035024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55454946675%3Atidsa-303472602395%3Alp9055338%3Ali%3Adec%3Adm%3Aag21457884145%3Acmp339900145&sid=797b34089b6a504fcbc05cf31750c8e8&dest_id=-131408;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1717361868;srpvid=e5089363b0ea0202;type=total;ucfs=1&"
                               className={`button-booking`}>
                                Prenota su Booking
                                <img src="https://seekvectors.com/files/download/booking.com-logo.png"
                                     style={{height: 20, width: 20}} alt=""/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            borderRadius: 10,
                            border: '1px solid black',
                            padding: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#fff2d5'

                        }}>
                            <div style={{position: 'relative', marginBottom: 10}}>
                                <img style={{width: '100%', borderRadius: 5, border: '1px solid black'}}
                                     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43226055.jpg?k=2281ee0b57ce76b7446bf3fe22e74e51b0b3dfdbf795b98ca538de735dabc1f7&o=" alt=""/>
                                <div style={{position: 'absolute', left: 20, bottom: 10, color: 'white'}}>Camera
                                    Camera Matrimoniale con Balcone o Terrazza
                                </div>

                            </div>
                            <div style={{display: "flex", flexWrap: 'wrap', gap: 2, marginBottom: 20}}>
                                <Service>
                                    <FullscreenIcon/>
                                    20m2
                                </Service>
                                <Service>
                                    <LandscapeIcon/>
                                    Vista
                                </Service>
                                <Service>
                                    <VolumeOffIcon/>
                                    Insonorizzazione
                                </Service>
                                <Service>
                                    <BedIcon/>
                                    1 letto matrimoniale large
                                </Service>
                                <Service>
                                    <PersonIcon/>
                                    2 ospiti
                                </Service>
                            </div>
                            <a href="https://www.booking.com/hotel/it/residenza-il-duomo.it.html?aid=318615&label=New_English_EN_FR_21457884145-eZyGpUGIc30QQgiK8gzijQS640819035024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55454946675%3Atidsa-303472602395%3Alp9055338%3Ali%3Adec%3Adm%3Aag21457884145%3Acmp339900145&sid=797b34089b6a504fcbc05cf31750c8e8&dest_id=-131408;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1717361868;srpvid=e5089363b0ea0202;type=total;ucfs=1&"
                               className={`button-booking`}>
                                Prenota su Booking
                                <img src="https://seekvectors.com/files/download/booking.com-logo.png"
                                     style={{height: 20, width: 20}} alt=""/>
                            </a>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </AnimationFadeIn>

        </div>
    );
};

export default Rooms;