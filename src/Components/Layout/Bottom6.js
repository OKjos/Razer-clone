import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EdgePage from '../Pages/Edge/Edge';
import './Bottom6.css';
import newAgeCampaign from '../../icons/new-age-campaign.jpeg';
import razerEnki from '../../icons/razer-enki.jpeg';
import blade15 from '../../icons/razer-blade-15.jpeg';
import razerBasilisk from '../../icons/razer-basilisk.jpeg';
import razerEdge from '../../icons/razer-edge.jpeg';
import razerOrnata from '../../icons/ornata-v3.jpeg';






function Bottom6({ handleEdge }) {




  return (
    <ul className="grid-container">
    <li className="single">
      <img className="new-age" src={newAgeCampaign} alt="New age" />
      <div>
        <div>
          <h2 className="new-age-main">
          UNLEASH A NEW AGE OF TECHNOLOGY
          </h2>
          <h3 className="new-age-sub">
          EXPERIENCE THE REVOLUTION
          </h3>
          <div className="cta-links">
            <button className="new-age-learn">
            Learn More <span className="greater-then-symbol">&gt;</span>
            </button>
            <button className="new-age-buy">
            Buy <span className="greater-then-symbol">&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div>
    </div>
    </li>
    <li className="single">
      <img className="enki" src={razerEnki} alt="Razer Enki" />
      <div>
        <div>
          <h2 className="enki-main">
          RAZER ENKI PRO
          </h2>
          <h3 className="enki-sub">
          AUTOMOBILI LAMBORGHINI EDITION
          </h3>
          <div className="cta-links">
            <button className="enki-learn">
            Learn More <span className="greater-then-symbol">&gt;</span>
            </button>
            <button className="enki-buy">
            Buy <span className="greater-then-symbol">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </li>
    <li className="single">
      <img className="razer-blade2" src={blade15} alt="Razer blade2" />
      <div>
        <div>
          <h2 className="blade-15-main">
          NEW RAZER BLADE 15
          </h2>
          <h3 className="blade-15-sub">
          PORTABLE. POWERFUL. PREFECTION.
          </h3>
          <div className="cta-links">
            <button className="blade-15-learn">
            Learn More <span className="greater-then-symbol">&gt;</span>
            </button>
            <button className="blade-15-buy">
            Buy <span className="greater-then-symbol">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </li>
    <li className="single">
      <img className="razer-basilisk" src={razerBasilisk} alt="Razer basilisk" />
      <div>
        <div>
          <div>
            <h2 className="basilisk-main">
            RAZER BASILISK V3 X HYPERSPEED
            </h2>
            <h3 className="basilisk-sub">
            ADVANCED CUSTOMIZABILITY. UNLEASHED.
            </h3>
            <div className="cta-links">
              <button className="basilisk-learn">
              Learn More <span className="greater-then-symbol">&gt;</span>
              </button>
              <button className="basilisk-buy">
              Buy <span className="greater-then-symbol">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="single">
      <img className="razer-edge" src={razerEdge} alt="Razer edge" />
      <div>
        <div>
          <div>
            <h2 className="edge-main">
            RAZER EDGE
            </h2>
            <h3 className="edge-sub">
            THE ULTIMATE ANDROID GAMING HANDHELD
            </h3>
            <div className="cta-links">
              <div className="button-hover">
                <button className="edge-learn" onClick={handleEdge}>
                  Learn More <span className="greater-then-symbol">&gt;</span>
                </button>
                <button className="edge-buy">
                    Buy <span className="greater-then-symbol">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="single">
      <img className="razer-ornata" src={razerOrnata} alt="Razer headset" />
      <div>
        <div>
          <h2 className="ornata-main">
          RAZER ORNATA V3 TENKEYLESS
          </h2>
          <h3 className="ornata-sub">
          SLIM. CLICKY. ERGONOMIC. 
          </h3>
          <div className="cta-links">
            <button className="ornata-learn">
            Learn More <span className="greater-then-symbol">&gt;</span>
            </button>
            <button className="ornata-buy">
            Buy <span className="greater-then-symbol">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>
);
}

export default Bottom6;