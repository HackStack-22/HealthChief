import React from 'react';
import './home.css'

export default function Home() {
    return (
        <div className='home-section-1 top'>
            <div className='home-section-1-left'>
                <h1>When you need a opinion, you know where to go.</h1>
                <p>The No.1 healthcare website in the nation, for you.</p>
            </div>
            <img className='home-seth-img' src={require('../../assets/doctor.png')} alt=''/>
        </div>
    )
}
