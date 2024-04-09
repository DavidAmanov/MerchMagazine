import React, { useContext, useState, useEffect } from "react";
import { productContext } from "./productCartContext";
import './cart.css'

export default function CartComponent() {
    const [ flag, setFlag ] = useState( false );
    const products = useContext( productContext );
    function cleanCart (){
        products.length = 0;
        setFlag(true);
        console.log(products)
    }

    useEffect( ()=> {
        if ( flag ) {
            setFlag(false);
        }
    }, [ flag ] )
    return (
        <div className="cart">
            <h3>Your Pokemons:</h3>
            <div className="products">
            {products.length > 0 ? (products.map(( product, index ) => (
                <div key={index}>
                    {product.name} - {product.value}
                </div>
            ))): (<div>No items in the cart</div>)}
            </div>
            <button onClick={cleanCart}>clean cart</button>
        </div>
    );
}