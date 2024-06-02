import React, {useEffect, useRef, useState} from 'react';
import s from './Main.module.css'

import Header from "../Header";
import About from "../About";
import Hero from "../Hero";
import Rooms from "../Rooms";
import Contact from "../Contact";
import Footer from "../Footer";


const Main = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const roomsRef = useRef(null);
    const contactRef = useRef(null);


    useEffect(() => {
        if (menuVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuVisible]);


    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff6e4'}}>
            <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} refs={[heroRef, aboutRef, roomsRef, contactRef]}/>
            <div ref={heroRef}>
                <Hero refRooms={roomsRef}/>
            </div>
            <div className={s.content}>
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