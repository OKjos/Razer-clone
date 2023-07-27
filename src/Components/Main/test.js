





import React from 'react';
import './Body.css';
import razerBlade16 from '../../icons/razer-blade-16.jpeg';
import streamController from '../../icons/stream-controller.jpeg';
import razerBlade18 from '../../icons/razer-blade-18.jpeg';

function Body() {
  return (
    <section className="body-con">
      <div className="grid-body-container-testttt">
        <div className="grid-item">
          <img className="IMG" src={razerBlade16} alt="Razer Blade 16" />
          <div className="text-container">
            <h2 className="blade-16-main">NEW RAZER BLADE 16</h2>
            <h3 className="blade-16-sub">BIGGER. BETTER. STILL THE BEST.</h3>
            <div className="cta-links">
              <button className="blade-16-learn">
                Learn More <span className="greater-then-symbol">&gt;</span>
              </button>
              <button className="blade-16-buy">
                Buy <span className="greater-then-symbol">&gt;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img className="IMG" src={streamController} alt="Stream Controller" />
          <div className="text-container">
            <h2 className="stream-controller-main">RAZER STREAM CONTROLLER X</h2>
            <h3 className="stream-controller-sub">INSTANT CONTROL. INFINITE CREATIVITY.</h3>
            <div className="cta-links">
              <button className="stream-controller-learn">
                Learn More <span className="greater-then-symbol">&gt;</span>
              </button>
              <button className="stream-controller-buy">
                Buy <span className="greater-then-symbol">&gt;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img className="IMG" src={razerBlade18} alt="Razer Blade 18" />
          <div className="text-container">
            <h2 className="blade-18-main">NEW RAZER BLADE 18</h2>
            <h3 className="blade-18-sub">THE ULTIMATE DESKTOP REPLACEMENT</h3>
            <div className="cta-links">
              <button className="blade-18-learn">
                Learn More <span className="greater-then-symbol">&gt;</span>
              </button>
              <button className="blade-18-buy">
                Buy <span className="greater-then-symbol">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
