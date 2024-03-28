import React from "react";
import { useState } from "react";
import './form.css'

export default function Form(){
    return(
        <div className="formBlock">
            <form className="form">
                <input className="item" name="name" type="text" placeholder="First name..."></input>
                <input className="item" name="surname" type="text" placeholder="Last name..."></input>
                <input className="item" name="phone" type="tel" placeholder="Phone number..."></input>
                <input className="item" name="email" type="email" placeholder="Email..." pattern=".+@example\.com"></input>
                <input className="item" name="address" type="text" placeholder="Address..." pattern="Example, example, 6"></input>
                <input className="item" name="postcode" type="text" placeholder="Post-code..."></input>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    )
}