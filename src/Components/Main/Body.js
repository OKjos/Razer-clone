import React from 'react';
import './Body.css'
import razerBlade16 from '../../icons/razer-blade-16.jpeg';
import streamController from '../../icons/stream-controller.jpeg';
import razerBlade18 from '../../icons/razer-blade-18.jpeg';

function Body() {
    return (
        <section className="body-con">
            <div>
                <img className="IMG" src={razerBlade16} />
                <div>
                    <h2 className="blade-16-main">
                    NEW RAZER BLADE 16
                    </h2>
                    <h3 className="blade-16-sub">
                    BIGGER. BETTER. STILL THE BEST.
                    </h3>
                </div>
                <div className="cta-links">
                    <button className="blade-16-learn">
                    Learn More <span className="greater-then-symbol">&gt;</span>
                    </button>
                    <button className="blade-16-buy">
                    Buy <span className="greater-then-symbol">&gt;</span>
                    </button>
                </div>
            </div>
            <div>
                <img className="IMG" src={streamController} />
                <div>
                    <h2 className="stream-controller-main">
                    RAZER STREAM CONTROLLER X
                    </h2>
                    <h3 className="stream-controller-sub">
                    INSTANT CONTROL. INFINITE CREATIVITY.
                    </h3>
                </div>
                <div className="cta-links">
                    <button className="stream-controller-learn">
                    Learn More <span className="greater-then-symbol">&gt;</span>
                    </button>
                    <button className="stream-controller-buy">
                    Buy <span className="greater-then-symbol">&gt;</span>
                    </button>
                </div>
            </div>
            <div>
                <img className="IMG" src={razerBlade18} />
                <div>
                    <h2 className="blade-18-main">
                    NEW RAZER BLADE 18
                    </h2>
                    <h3 className="blade-18-sub">
                    THE ULTIMATE DESKTOP REPLACEMENT
                    </h3>
                </div>
                <div className="cta-links">
                    <button className="blade-18-learn">
                    Learn More <span className="greater-then-symbol">&gt;</span>
                    </button>
                    <button className="blade-18-buy">
                    Buy <span className="greater-then-symbol">&gt;</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
    
export default Body;