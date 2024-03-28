import React from "react";
import Menu from "../components/topMenu";
import Form from "../components/form";


export default function Cart(){
    return(
        <>
        <Menu />
        <div className="pageContainer">
        <Form />
        </div>
        </>
    )
}