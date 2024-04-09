import React from "react";
import Menu from "../components/topMenu";
import Form from "../components/form";
import CartComponent from '../components/cart'
// import {AddProductToContext, productContext} from '../components/productCartContext';


export default function Cart(){
    return(
        <>
        <Menu />
        <div className="pageContainer">
            <CartComponent />
        <Form />
        </div>
        </>
    )
}