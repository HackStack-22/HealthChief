import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
import ListDiseases from './components/diseases/ListDiseases';
import { Diseases } from './components/data/diseases';
import DiseaseForm from './components/diseases-form/DiseaseForm';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/diseases-list' element={<ListDiseases />} />
                {Diseases.map((ele) => {
                    var href = ele.name.replace(" ", "-").toLowerCase()
                    return (
                        <Route path={'/diseases-list/'+href} element={<DiseaseForm data={ele.name} />} />
                    )
                })}
            </Routes>
            <Footer />
        </Router>
    )
}