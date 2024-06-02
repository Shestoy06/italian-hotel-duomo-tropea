import React from 'react';
import Slider from "./Slider";
import ScrollAnimation from "react-animate-on-scroll";

const AnimationFadeIn = ({children}) => {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            {children}
        </ScrollAnimation>
    );
};

export default AnimationFadeIn;