import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';

export default function App(){
    return(
        <>
        <Route path="/">
            <Products />
        </Route>
        </>
    )
}