import React from 'react';
import s from "./Main/Main.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import useViewportHeight from "../hooks/useViewportHeight";
import {useMediaQuery} from "@mui/material";

const Header = ({menuVisible, setMenuVisible, refs}) => {

    const vh = useViewportHeight()

    const isDesktop = useMediaQuery('(min-width:780px)');


    return (
        <header className={s.header} style={{
            height: 40,
            position: 'fixed',
            top: 0,
            width: isDesktop ? 'calc(100vw - 80px)' : 'calc(100vw - 40px)',
            padding: isDesktop ? '10px 40px' : '10px 20px',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            display: 'flex',
        }}>
            {!isDesktop && (menuVisible ? <CloseIcon style={{zIndex: 201}} onClick={() => setMenuVisible(false)} /> : <MenuIcon style={{zIndex: 201}} onClick={() => setMenuVisible(true)}/>)}
            <div className={`${s.menu} ${menuVisible ? s.menu_visible : s.menu_hidden}`} style={{height: !isDesktop ? vh + 'px' : '100%'}} onClick={() => setMenuVisible(false)}>
                <div style={{cursor: 'pointer'}} onClick={() => scrollToRef(refs[0])}>Accoglienza</div>
                <div style={{cursor: 'pointer'}} onClick={() => scrollToRef(refs[1])}>Sull'albergo</div>
                <div style={{cursor: 'pointer'}} onClick={() => scrollToRef(refs[2])}>Camere</div>
                <div style={{cursor: 'pointer'}} onClick={() => scrollToRef(refs[3])}>Media</div>
            </div>
            <div style={{flexGrow: 1, textAlign: 'right', zIndex: 201}}>duomo tropea</div>
        </header>
    );
};

export const scrollToRef = (ref) => {
    if (ref.current) {
        const topOffset = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topOffset - 60, behavior: 'smooth' });
    }
}


export default Header;