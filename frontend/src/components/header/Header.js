import React, { useEffect, useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const isMobile = navigator.userAgentData.mobile;
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

        if (!isMobile) {
            scrollTop >= 70 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
        }
    };

    function logOutUser() {
        fetch("https://healthchief.herokuapp.com/logout", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error("error: " + err);
            });
        const loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            localStorage.clear();
            alert("Logged out successfully")
            navigate("/", { replace: true });
        }

    }
    const [isOpen, setIsOpen] = useState(false);
    const loggedInUser = localStorage.getItem("username");

    return (
        <>
            <header className='header'>
                <div className='header-top'>
                    <img className='header-logo' src={require('../../assets/logo.png')} alt='' />
                    <h1>HealthChief</h1>
                    {loggedInUser && (
                        <div className='header-top-bottom'>
                            <button onClick={logOutUser}>Logout</button>
                        </div>
                    )}
                    {!loggedInUser && (
                        <div className='header-top-bottom'>
                            <a href='/login' onClick={() => window.location.reload(false)}>Login</a>
                            <a href='/signup'>Sign Up</a>
                        </div>
                    )}



                </div>
                <hr />
                <div className='header-bottom'>
                    <img onClick={() => setIsOpen(!isOpen)} className='header-menu' src={require('../../assets/header/menu.gif')} alt='' />
                    <img className='header-logo-mobile' src={require('../../assets/logo.png')} alt='' />

                    <div className='header-navlinks'>
                        <a href='/'>Home</a>
                        <a href='/diseases-list'>Health Checks</a>
                    </div>
                </div>
                <hr className='bottom-hr' />
            </header>

            {isOpen && (
                <div className='header-mobile'>
                    <img onClick={() => setIsOpen(!isOpen)} className='header-menu' src={require('../../assets/header/menu.gif')} alt='' />

                    {loggedInUser && (
                        <div className='header-top-bottom'>
                            <button onClick={logOutUser}>Logout</button>
                        </div>
                    )}
                    {!loggedInUser && (
                        <div className='header-mobile-btn'>
                            <a href='/login'>Login</a>
                            <a href='/signup'>Sign Up</a>
                        </div>
                    )}

                    <a href='/'>Home</a>
                    <a href='/diseases-list'>Health Checks</a>
                </div>
            )}
        </>
    )
}
