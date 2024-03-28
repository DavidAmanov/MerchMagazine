import React from "react";
import Menu from "../components/topMenu";
import MapComp from "../components/map";
import skate from '../images/skate.gif'
import './About.css'


export default function About(){
    return(
        <div className="about">
        <Menu />
        <div className="containerSkate">
        <img src={skate} alt='skate' className="skate"/>
        </div>
        <div className="mapContainer">
        <div className="information">
            <h2>DaKI STORE</h2>
            <span style={{display: "block"}}>phone-111111111</span>
            <span style={{display: "block"}}>email-DiKIstore@gmail.com</span>
            <span style={{display: "block"}}>address-6 Southwark St.</span>
        </div>
        <MapComp className='map'/>
        </div>
        </div>
    )
}