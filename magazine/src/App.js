import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';

export default function App(){

    return(
        <>

        <Router>
            <Routes>
                <Route exact path="/" element={<Products/>} /> 
                <Route path="/about" element={<About />}/> 
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>

        </>
    )
}