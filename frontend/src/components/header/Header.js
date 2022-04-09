import React, { useEffect } from 'react';
import './header.css'

export default function Header() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header-bottom');
        const scrollTop = window.scrollY;

        scrollTop >= 70 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
    };
    return (
        <>
            <header className='header'>
                <div className='header-top'>
                    <img className='header-logo' src={require('../../assets/logo.png')} alt=''/>
                    <h1>HealthChief</h1>
                    <div className='header-top-bottom'>
                        <a href='/login'>Login</a>
                        <a href='/signup'>Sign Up</a>
                    </div>
                </div>
                <hr />
                <div className='header-bottom'>
                    <div className='header-navlinks'>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                    </div>
                </div>
                <hr className='bottom-hr' />
            </header>

        </>
    )
}
