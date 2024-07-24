import React from "react";
import SmoothScroll from 'smooth-scroll';

const Hero = ({ onStartJourney }) => {
    const handleScroll = () => {
        const scroll = new SmoothScroll();
        const target = document.querySelector('.pricing');
        if (target) {
            scroll.animateScroll(target);
        }
    };

    return (
        <section className="hero">
            <div className="content">
                <div className="title">
                    <h1>Lets</h1>
                    <h1>Get</h1>
                    <h1>Moving</h1>
                </div>
                <div className="sub-title">
                    <p>Lets start your fitness journey</p>
                    <p>Unleash the potential</p>
                </div>
                <div className="buttons">
                    <button onClick={onStartJourney}>Start your journey</button>
                    <button onClick={handleScroll}>Discover your plan</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
