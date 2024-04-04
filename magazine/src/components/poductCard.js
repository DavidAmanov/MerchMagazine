import React from "react";
import './productCard.css'

export default function Product ({srcImg, pokemonName}){
    return(
        <>
        <div className='product'>
           <img className='pokemonImg' src={srcImg} alt={pokemonName} /> 
           <div className='pokemonName'>{pokemonName}</div>
        </div>
        </>
    )
}

