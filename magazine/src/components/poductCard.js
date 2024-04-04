import React, {useState} from "react";
import './productCard.css'

export default function Product ({srcImg, pokemonName}){
    const [countProduct, setCountProduct] = useState(0);
    function handleClick (){
        setCountProduct(countProduct + 1);
    }

    return(
        <>
        <div className='product'>
           <img className='pokemonImg' src={srcImg} alt={pokemonName} /> 
           <div className='pokemonName'>{pokemonName}</div>
           <div className='addSection'>
            <button onClick={handleClick}>add to cart</button>
            <div className='counter'>{countProduct}</div>
           </div>
        </div>
        </>
    )
}

