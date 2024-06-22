import React from 'react';
import s from "./Main/Main.module.css";
import useViewportHeight from "../hooks/useViewportHeight";
import "animate.css/animate.compat.css"
import cathedrale from "../images/cathedrale_tropea.jpeg";
import {scrollToRef} from "./Header";
import {useMediaQuery} from "@mui/material";

const Hero = ({refRooms}) => {
    const fullHeight = useViewportHeight() + 'px'

    return (
        <div className={s.main} style={{height: fullHeight, transition: '.1s all ease'}}>
            <h1 className={s.title}>Duomo Tropea</h1>
            <div className={s.description}>Hotel nel cuore storico di Tropea</div>
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '0 0 30px 30px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid black'
            }}>
                <img
                    src={cathedrale}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
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