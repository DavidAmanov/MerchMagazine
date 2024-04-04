import React, {useContext} from "react";
import { productContext } from "./productCartContext";

export default function CartComponent (){
    const products = useContext(productContext);
    return(
        <>
        <div>{products.map(product=><div>{product.name}</div>)}</div>
        </>
    )
}