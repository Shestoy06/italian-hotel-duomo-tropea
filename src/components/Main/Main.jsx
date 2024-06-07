import React, {useEffect, useRef, useState} from 'react';
import s from './Main.module.css'

import Header from "../Header";
import About, {Service} from "../About";
import Hero from "../Hero";
import Rooms from "../Rooms";
import Contact from "../Contact";
import Footer from "../Footer";
import {useMediaQuery} from "@mui/material";
import { useInView } from "react-intersection-observer";
import {Toaster} from "react-hot-toast";


const Main = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const roomsRef = useRef(null);
    const contactRef = useRef(null);

    const boxVariant = {
        visible: { opacity: 1, position: 'relative', left: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, position: 'relative', left: '-100%' }
    };


    useEffect(() => {
        if (menuVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuVisible]);

    const isDesktop = useMediaQuery('(min-width:780px)');



    if (isDesktop) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff6e4'
            }}>
                <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible}
                        refs={[heroRef, aboutRef, roomsRef, contactRef]}/>
                <div style={{width: '100%'}}>
                    <div ref={heroRef} style={{width: '100%'}}>
                        <Hero refRooms={roomsRef}/>
                    </div>
                </div>


                <div className={s.content}>
                    <div><Toaster/></div>
                    <div ref={aboutRef}>
                        <About/>
                    </div>
                    <div ref={roomsRef}>
                        <Rooms/>
                    </div>

                    <div ref={contactRef}>
                        <Contact ref={contactRef}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff6e4'
        }}>
            <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible}
                    refs={[heroRef, aboutRef, roomsRef, contactRef]}/>
            <div ref={heroRef}>
                <Hero refRooms={roomsRef}/>
            </div>
            <div className={s.content}>
                <div><Toaster/></div>
                <div ref={aboutRef}>
                    <About/>
                </div>
                <div ref={roomsRef}>
                    <Rooms/>
                </div>
                <div ref={contactRef}>
                    <Contact ref={contactRef}/>
                </div>
                <Footer/>
            </div>
        </div>

    );
};

export default Main;