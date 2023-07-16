import React from 'react';
import { useState } from 'react'
import './Footer.css'
import twitter from '../../icons/twitter.svg';
import facebook from '../../icons/facebook.svg';
import insta from '../../icons/insta.svg';

function Footer() {


    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-containerNav">
                        <div>
                            <p className='header-color'>Shop</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">RazerStores</a></li>
                                <li><a href="https://www.razer.com/razercafe">RazerCafe</a></li>
                                <li><a href="https://www.razer.com/razerstores">Store Locator</a></li>
                                <li><a href="https://www.razer.com/razerstores">Purchase Programs</a></li>
                                <li><a href="https://www.razer.com/education">Education</a></li>
                                <li><a href="https://www.razer.com/razerstores">Exclusives</a></li>
                                <li><a href="https://www.razer.com/store/rewards">RazerStore Rewards</a></li>
                                <li><a href="https://www.razer.com/razerstores">Newsletter</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className='header-color'>Explore</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">Technology</a></li>
                                <li><a href="https://www.razer.com/razerstores">Chroma RGB</a></li>
                                <li><a href="https://www.razer.com/razerstores">Concepts</a></li>
                                <li><a href="https://www.razer.com/razerstores">Espots</a></li>
                                <li><a href="https://www.razer.com/razerstores">Collabs</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className='header-color'>Support</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">Get Help</a></li>
                                <li><a href="https://www.razer.com/razerstores">Registration {'&'} Warranty</a></li>
                                <li><a href="https://www.razer.com/razerstore-support">RazerStore Support</a></li>
                                <li><a href="https://www.razer.com/razerstores">RazerCare</a></li>
                                <li><a href="https://www.razer.com/razerstores">Manage Razer ID</a></li>
                                <li><a href="https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos">Support Videos</a></li>
                                <li><a href="https://www.razer.com/legal/commitment-to-accessibility">Accessibility Statement</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className='header-color'>Company</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">About Us</a></li>
                                <li><a href="https://www.razer.com/razerstores">Careers</a></li>
                                <li><a href="https://www.razer.com/razerstores">Press Room</a></li>
                                <li><a href="https://www.razer.com/razerstores">zVentures</a></li>
                                <li><a href="https://www.razer.com/razerstores">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-containerNav-figure">
                            <h2>FOR GAMERS. BY GAMERS.™</h2>
                            <div className='media-buttons'>
                                <button className='facebook-button' onClick={() => window.open("https://www.facebook.com/razer")}>
                                    <img className='facebook' src={facebook} alt="Facebook Icon" />
                                </button>
                                <button className='insta-button' onClick={() => window.open("https://www.instagram.com/razer/")}>
                                    <img className='insta' src={insta} alt="Insta Icon" />
                                </button>
                                <button className='twitter-button' onClick={() => window.open("https://twitter.com/Razer")}>
                                    <img className='twitter' src={twitter} alt="twitter Icon" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="footer-containerCopyright">
                        <p>Copyright © 2021 Razer Inc. All rights reserved.</p>

                        <ul>
                            <li>
                                <a href="https://www.razer.com/razerstores">Site Map</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Legal Terms</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Cookie Plolicy</a>
                            </li>
                        </ul>

                        <div className="unitedStates">
                            <span>United States</span>
                            <a href="https://www.razer.com/razerstores">Change location {'>'}</a>
                        </div>
                    </div>

                </div> 
            </footer>
        </>
    )
}

export default Footer;