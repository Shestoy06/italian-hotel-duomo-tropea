import React, {useEffect} from 'react';
import s from "./Main/Main.module.css";
import cathedrale from "../images/cathedrale_tropea.jpeg";
import cityCenter from "../images/city_center_tropea.jpeg";
import beachTropea from "../images/beach_tropea.JPG";
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.JPG';

// Icons for grid of services
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeckIcon from '@mui/icons-material/Deck';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import Slider from "./ui/Slider";
import ScrollAnimation from "react-animate-on-scroll";
import AnimationFadeIn from "./ui/AnimationFadeIn";
import {useMediaQuery} from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AnimationSlide from "./ui/AnimationSlide";

export const Service = ({children}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 10, padding: '5px 10px', borderRadius: 5, fontSize: 14, width: '100%'}}>
            {children}
        </div>
    )
}



const About = () => {

    const isDesktop = useMediaQuery('(min-width:780px)');

    const slidesInfo = [
        {
            image: cathedrale,
            title: 'La Chiesa Concattedrale'
        },
        {
            image: cityCenter,
            title: 'Centro storico della città'
        },
        {
            image: beachTropea,
            title: 'Spiaggia'
        },
        {
            image: photo1,
            title: 'Duomo, centro storico'
        },
        {
            image: photo2,
            title: 'Affaccio del Corso, punto di osservazione Tropea'
        },
        {
            image: photo3,
            title: 'Vardanello'
        },
        {
            image: photo4,
            title: 'Your best sunshine!'
        },
    ]

    const slides = slidesInfo.map(slide => (
        <SwiperSlide style={{width: '500px !important'}} className="slide_gallery">
            <div style={{borderRadius: 5, border: '1px solid black'}}>
                <img src={slide.image}/>
            </div>
            <div style={{position: 'absolute', left: 20, bottom: 20, fontSize: 18, color: "white"}}>
                {slide.title}
            </div>
        </SwiperSlide>))


    if (isDesktop) {
        return (
            <div className={s.section}>
                <div className={s.section_content}>
                    <span className={s.section_title}>Sull'albergo</span>
                    <AnimationFadeIn>
                        <div>Le Residenza Il Duomo propone camere moderne e una terrazza
                            panoramica ben esposta. Si trova nel centro storico della città, a soli 10 metri dalla
                            cattedrale
                            del
                            XII secolo di Tropea e a 5 minuti dalla spiaggia.
                        </div >
                    </AnimationFadeIn>

                </div>


                <div style={{width: '60%'}}>
                    <AnimationFadeIn>
                        <div style={{marginBottom: 0}}>
                            <Slider slides={slides} st/>
                        </div>
                    </AnimationFadeIn>

                </div>

            </div>

        )
    }

    return (
        <div className={s.section}>
            <span className={s.section_title}>Sull'albergo</span>
            <AnimationFadeIn>
                <div style={{marginBottom: 40}}>Le Residenza Il Duomo propone camere moderne e una terrazza
                    panoramica ben esposta. Si trova nel centro storico della città, a soli 10 metri dalla cattedrale
                    del
                    XII secolo di Tropea e a 5 minuti dalla spiaggia.
                </div>
            </AnimationFadeIn>
            <AnimationFadeIn>
                <div style={{marginBottom: 0}}>
                    <Slider slides={slides}/>
                </div>
            </AnimationFadeIn>

            <AnimationFadeIn>
                <div style={{display: "flex", flexWrap: 'wrap', gap: 5}}>
                    <Service>
                        <DeckIcon/>
                        Terrazza
                    </Service>
                    <Service>
                        <RestaurantIcon/>
                        Colazione
                    </Service>
                    <Service>
                        <WifiIcon/>
                        Connessione WiFi gratuita
                    </Service>
                    <Service>
                        <AirportShuttleIcon/>
                        Navetta aeroportuale
                    </Service>
                    <Service>
                        <FamilyRestroomIcon/>
                        Disponibilità di camere familiari
                    </Service>
                </div>
            </AnimationFadeIn>
        </div>

    );
};

export default About;