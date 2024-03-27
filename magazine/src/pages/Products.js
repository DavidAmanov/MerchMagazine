import React from "react";
import Menu from "../components/topMenu";
import './Products.css'
import Product from "../components/poductCard";


function Products({srcImg}) {
  const colors =['aqua', 'black', 'blue', 'orange', 'pink', 'red', 'violet', 'white', 'yellow']
  return (
   <>
   <Menu/>
   <div className="productMarkup" >
    {colors.map((element, index)=>
    <div className="card_container">
    <Product srcImg={element} key={index}/>
    </div>
    )}
   </div>
   </>
  );
}

export default Products;
