import React from 'react';
import s from "./Main/Main.module.css";
import video from "../images/main_video(1).mp4";
import useViewportHeight from "../hooks/useViewportHeight";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import AnimationFadeIn from "./ui/AnimationFadeIn";
import {scrollToRef} from "./Header";

const Hero = ({refRooms}) => {
    const fullHeight = useViewportHeight() + 'px'

    return (
        <div className={s.main} style={{height: fullHeight, transition: '.1s all ease'}}>
            <div className={s.title}>Duomo Tropea</div>
            <div className={s.description}>Hotel nel cuore storico di Tropea</div>
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '0 0 30px 30px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid black'
            }}>
                <video
                    src={video}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    muted
                    loop
                    autoPlay
                />
            </div>
            <div className="button"
                 onClick={() => scrollToRef(refRooms)}
               style={{
                   position: 'absolute',
                   bottom: '15%',
                   left: '50%',
                   transform: 'translate(-50%, 0)',
               }}>Vedi disponibilità</div>
        </div>
    );
};

export default Hero;