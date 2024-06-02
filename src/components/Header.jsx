import React from 'react';
import s from "./Main/Main.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import useViewportHeight from "../hooks/useViewportHeight";

const Header = ({menuVisible, setMenuVisible, refs}) => {

    const vh = useViewportHeight()



    return (
        <header className={s.header} style={{
            height: 40,
            position: 'fixed',
            top: 0,
            width: 'calc(100vw - 40px)',
            padding: '10px 20px',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            display: 'flex',
        }}>
            {menuVisible ? <CloseIcon style={{zIndex: 201}} onClick={() => setMenuVisible(false)} /> : <MenuIcon style={{zIndex: 201}} onClick={() => setMenuVisible(true)}/>}
            <div className={`${s.menu} ${menuVisible ? s.menu_visible : s.menu_hidden}`} style={{height: vh + 'px'}} onClick={() => setMenuVisible(false)}>
                <div onClick={() => scrollToRef(refs[0])}>Accoglienza</div>
                <div onClick={() => scrollToRef(refs[1])}>Sull'albergo</div>
                <div onClick={() => scrollToRef(refs[2])}>Camere</div>
                <div onClick={() => scrollToRef(refs[3])}>Media</div>
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