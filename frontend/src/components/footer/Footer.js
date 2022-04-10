import React from 'react';
import './footer.css'

export default function Footer() {
    function displayDonationForm() {
        document.querySelector(".donation-container").style.display = "flex"
    }
    return (
        <>
            <div className='donation-container'>
                <div className='donation-form'>
                    <button onClick={() => document.querySelector(".donation-container").style.display = "none"}><span>&times;</span> Close</button>
                    <div>
                        <h2>Bank Details</h2>
                        <p>Account Number: XXXXXXXXXXXXX</p>
                        <p>IFCS Code: XXXHFVBXXXX</p>
                    </div>
                    <div>
                        <h2>Google Pay</h2>
                        <img src={require('../../assets/footer/qr-code.png')} alt='' />
                    </div>

                </div>
            </div>
            <footer className='footer'>
                <div className='footer-container'>
                    <div>
                        <h1>Follow HealthChief</h1>
                        <div>
                            <i className="fa fa-facebook social-media"></i>
                            <i className="fa fa-instagram social-media"></i>
                            <i className="fa fa-youtube social-media"></i>
                            <i className="fa fa-twitter social-media"></i>
                        </div>
                        <button className='donate-btn' onClick={displayDonationForm}>Make Donation</button>
                    </div>
                </div>
                <p className='footer-copyright'>&#169; 2022 HealthChief Foundation for Medical Education. All rights reserved.</p>
            </footer>
        </>
    )
}
