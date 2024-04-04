import React, {useState} from "react";

import './productCard.css'
const productList = [];
export default function Product ({srcImg, pokemonName}){
    const [countProduct, setCountProduct] = useState(0);
    function handleClick (){
        setCountProduct(countProduct + 1);
        if(productList.some(pokemon => pokemon.name === pokemonName)){
            const index = productList.findIndex(pokemon=>pokemon.name === pokemonName);
            productList[index].value = productList[index].value + 1  
        }else{
        productList.push({name: pokemonName, value: countProduct+1})}
        console.log(productList)
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

