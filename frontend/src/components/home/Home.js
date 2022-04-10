import React from 'react';
import './home.css';
import CovidData from './Covid';
// document.location.reload()
export default function Home() {

    const loggedInUser = localStorage.getItem("email");
    if (loggedInUser) {
        // alert(loggedInUser)
        if (!window.location.hash) {
            window.location = window.location + '#loggedin';
            window.location.reload();
        }
    }

    
    return (
        <>
            <div className='home-page top'>
                <div className='home-section-1'>
                    <div className='home-section-1-left'>
                        <h1>When you need a opinion, you know where to go.</h1>
                        <p>The No.1 healthcare website in the nation, for you.</p>
                    </div>
                    <img className='home-doc-img' src={require('../../assets/doctor.png')} alt='' />
                </div>

                <div className='home-section-2'>

                    <div className='home-section-2-left'>
                        <h1>Why choose HealthChief?</h1>
                    </div>

                    <div className='home-section-2-right'>
                        <div className='home-section-2-right-sub'>
                            <div>
                                <svg aria-hidden="true" className="hs2-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><span></span>
                                    <title>stethoscope_1</title>
                                    <path d="M6,17a3,3,0,1,1,3-3A3,3,0,0,1,6,17Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,6,13Z">
                                    </path>
                                    <path d="M19,18v4A6,6,0,0,1,7,22V19.05H5V22a8,8,0,0,0,16,0V18Z"></path>
                                    <path d="M25,2V4h2v7a7,7,0,0,1-14,0V4h2V2H11v9h0a9,9,0,0,0,18,0V2Z"></path>
                                </svg>
                                <h2>More experience</h2>
                                <p>The million patients we treat each year prepares us to treat the one who matters most — you.</p>
                            </div>
                            <div>
                                <svg aria-hidden="true" className="hs2-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><span></span>
                                    <path d="M26 4h-3V2h-3.556a3.965 3.965 0 0 0-6.888 0H9v2H5v26h22V4zM12 4h2a2 2 0 0 1 4 0h3v2H11V4zM7 28V6h2v2h14V6h2v22z">
                                    </path>
                                    <path d="M17.503 23.454l-3.01-6.771L13.565 19H9v-2h3.212l2.184-5.46 3.212 7.229.885-1.769H23v2h-3.271l-2.226 4.454z">
                                    </path>
                                </svg>
                                <h2>The right answers</h2>
                                <p>Count on our experts to deliver an accurate diagnosis and the right plan for you the first time.</p>
                            </div>
                        </div>
                        <div className='home-section-2-right-sub'>
                            <div>
                                <svg aria-hidden="true" className="hs2-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><span></span>
                                    <title>giving-charity</title>
                                    <path d="M2.71,25.71,1.29,24.29,7.59,18H18v1a5,5,0,0,1-5,5H11V22h2a3,3,0,0,0,2.83-2H8.41Z">
                                    </path>
                                    <path d="M7.71,30.71,6.29,29.29,9.59,26h9l8.86-8.87a3.44,3.44,0,0,0-3.74.58l-3,3-1.42-1.42,3-3a5.46,5.46,0,0,1,7.42,0l.7.71-11,11h-9Z">
                                    </path>
                                    <path d="M16,15.41,10.33,9.75a3.91,3.91,0,0,1,0-5.5,4,4,0,0,1,5.5,0l.17.17.17-.17a4,4,0,0,1,5.5,0,3.91,3.91,0,0,1,0,5.5Zm-3.38-6.2L16,12.59l4.25-4.26a1.88,1.88,0,0,0,0-2.66,1.92,1.92,0,0,0-2.67,0L16,7.25,14.42,5.67a1.92,1.92,0,0,0-2.67,0,1.88,1.88,0,0,0,0,2.66Z">
                                    </path>
                                </svg>
                                <h2>You come first</h2>
                                <p>Treatment at Mayo Clinic is a truly human experience. You’re cared for as a person first.</p>
                            </div>
                            <div>
                                <svg aria-hidden="true" className="hs2-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><span></span>
                                    <circle cx="3" cy="11" r="1"></circle>
                                    <circle cx="11" cy="5" r="1"></circle>
                                    <circle cx="29" cy="4" r="1"></circle>
                                    <circle cx="29" cy="11" r="1"></circle>
                                    <circle cx="21" cy="5" r="1"></circle>
                                    <circle cx="3" cy="4" r="1"></circle>
                                    <path d="M15.99962,18.96289A4.96289,4.96289,0,1,1,20.96251,14,4.96847,4.96847,0,0,1,15.99962,18.96289Zm0-8A3.03711,3.03711,0,1,0,19.03673,14,3.04038,3.04038,0,0,0,15.99962,10.96289Z">
                                    </path>
                                    <rect x="14.99962" y="2" width="2" height="5"></rect>
                                    <rect x="6.16118" y="5.66123" width="2.00013" height="4.99981" transform="translate(-3.67346 7.45635) rotate(-45.01187)"></rect>
                                    <rect x="22.33875" y="7.16124" width="4.99947" height="1.99979" transform="translate(1.50423 19.9538) rotate(-45)"></rect>
                                    <path d="M22.99962,32h-2V27.64355a5.001,5.001,0,0,1,1.708-3.76367l6.63379-5.80468a1.00732,1.00732,0,0,0-.04883-1.36768,1.024,1.024,0,0,0-1.41406,0l-5.89746,4.89111A4.894,4.894,0,0,1,18.51525,23H13.485a4.96786,4.96786,0,0,1-3.53515-1.46484L4.19005,16.77a1.00379,1.00379,0,1,0-1.48242,1.35107l6.585,5.75879a5.00039,5.00039,0,0,1,1.707,3.76367V32h-2V27.64355a2.99917,2.99917,0,0,0-1.02344-2.25781L1.34142,19.58105A3.01619,3.01619,0,0,1,1.29259,15.293a3.07251,3.07251,0,0,1,4.24219,0l5.75976,4.76465A3.10077,3.10077,0,0,0,13.485,21h5.03028a3.02119,3.02119,0,0,0,2.12109-.87891L26.5338,15.23a2.90751,2.90751,0,0,1,2.05176-.81543,2.99933,2.99933,0,0,1,2.12109,5.12061L24.024,25.38574a2.99826,2.99826,0,0,0-1.02441,2.25781Z">
                                    </path>
                                </svg>
                                <h2>Innovation with impact</h2>
                                <p>All of our patient care, education and research are driven to make discoveries that can help heal you.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='home-section-1 this-top'>
                    <div className='home-section-1-left'>
                        <h1>Live COVID-19 Cases in your Country</h1>
                    </div>
                    <CovidData />
                </div>
            </div>
        </>
    )
}
