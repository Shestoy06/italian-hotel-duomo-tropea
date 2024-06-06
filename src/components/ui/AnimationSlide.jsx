import React, {useEffect, useRef, useState} from 'react';
import useViewportHeight from "../../hooks/useViewportHeight";


const AnimationSlide = ({ children }) => {
    const childRef = useRef(null);
    const [opacity, setOpacity] = useState(0)
    const vh = useViewportHeight()

    const handleScroll = () => {
        if (childRef.current) {
            const rect = childRef.current.getBoundingClientRect();
            console.log(rect.top - 60)
            if (opacity < 0) {

            }
            else if (rect.top - 60 < 0) {
                setOpacity( prevState => prevState - 0.01)
            }
            else if (rect.top - 60 < (vh - 50)) {
                setOpacity( prevState => prevState + 0.005)
            }
            else if (rect.top -60 > (-vh + 50)) {

                setOpacity( prevState => prevState + 0.015)
            }
            else {
                setOpacity( prevState => prevState - 0.01)
            }
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div ref={childRef} style={{opacity: opacity}}>
                {children}
            </div>
        </div>
    );
};

export default AnimationSlide;