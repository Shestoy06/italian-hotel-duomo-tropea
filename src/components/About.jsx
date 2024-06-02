import React from 'react';
import s from "./Main/Main.module.css";
import cathedrale from "../images/cathedrale_tropea.jpeg";
import cityCenter from "../images/city_center_tropea.jpeg";
import beachTropea from "../images/beach_tropea.JPG";

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

export const Service = ({children}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 10, padding: '5px 10px', borderRadius: 5, fontSize: 14, width: '100%'}}>
            {children}
        </div>
    )
}

const About = () => {

    const slides = [
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
    ]




    return (
        <div className={s.section}>
            <span className={s.section_title}>Sull'albergo</span>
            <AnimationFadeIn>
                <div>Le Residenza Il Duomo propone camere moderne e una terrazza
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