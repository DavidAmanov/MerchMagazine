import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './pages/Products';
import About from './pages/About';

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Products/>} /> 
                <Route path="/about" element={<About />}/> 
            </Routes>
        </Router>
        </>
    )
}