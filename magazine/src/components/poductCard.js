import React, {useState, useContext} from "react";
import {productContext} from './productCartContext';
import './productCard.css'

// const productList = [];
export default function Product ({srcImg, pokemonName}){
    const products = useContext(productContext);
    const [countProduct, setCountProduct] = useState(0);
    function handleClick (){
        setCountProduct(countProduct + 1);
        if(products.some(pokemon => pokemon.name === pokemonName)){
            const index = products.findIndex(pokemon=>pokemon.name === pokemonName);
            products[index].value = products[index].value + 1  
        }else{
        products.push({name: pokemonName, value: countProduct+1})}
        console.log(products)
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




