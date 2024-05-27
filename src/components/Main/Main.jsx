import React from 'react';
import s from './Main.module.css'
import video from '../../images/main_video.mov'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Duomo tropea</div>
            <div className={s.description}>Hotel nel cuore storico di Tropea</div>
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',
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
            <a href="#" className="button"
               style={{
                   position: 'absolute',
                   bottom: '20%',
                   left: '50%',
                   transform: 'translate(-50%, 0)',
                   fontFamily: 'Montserrat Variable, sans-serif',
            }}>Vedi disponibilità</a>

        </div>
    );
};

export default Main;