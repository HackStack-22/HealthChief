import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
        </Router>
    )
}
