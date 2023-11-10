import React from 'react';
import './Body.css';
import razerBlade16 from '../../icons/razer-blade-16.jpeg';
import streamController from '../../icons/stream-controller.jpeg';
import razerBlade18 from '../../icons/razer-blade-18.jpeg';

function Body() {
  return (




    <section className="body-con">
      <div className="grid-body-container">



        <div className="grid-item">


          <img className="IMG" src={razerBlade16} alt="Razer Blade 16" />
          <div className="text-container">
            <h2 >NEW RAZER BLADE 16</h2>
            <h3 >BIGGER. BETTER. STILL THE BEST.</h3>
              <button className='learn-button'>Learn More <span className="greater-then-symbol">&gt;</span></button>
              <button className='buy-button'>Buy <span className="greater-then-symbol">&gt;</span></button>
          </div>
        </div>




        <div className="grid-item">


          <img className="IMG" src={streamController} alt="Stream Controller" />
          <div className="text-container">
            <h2>RAZER STREAM CONTROLLER X</h2>
            <h3>INSTANT CONTROL. INFINITE CREATIVITY.</h3>
              <button className='learn-button'>Learn More <span className="greater-then-symbol">&gt;</span></button>
              <button className='buy-button'>Buy <span className="greater-then-symbol">&gt;</span></button>
          </div>
        </div>





        <div className="grid-item">


          <img className="IMG" src={razerBlade18} alt="Razer Blade 18" />
          <div className="text-container">
            <h2 >NEW RAZER BLADE 18</h2>
            <h3 >THE ULTIMATE DESKTOP REPLACEMENT</h3>
              <button className='learn-button'>Learn More <span className="greater-then-symbol">&gt;</span></button>
              <button className='buy-button'>Buy <span className="greater-then-symbol">&gt;</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;


