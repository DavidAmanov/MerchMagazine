import React from 'react';
import {Link} from 'react-router-dom';
import './topMenu.css'


export default function Menu (){
    const titles = ['Products','About Us','Cart']
    const links = ['http://localhost:3000/', 'http://localhost:3000/about', 'http://localhost:3000/cart']
    return(
        <div className='menuMarkup'>
        {titles.map((element, i) => (
            <div className='menuItem' key={i}>
             <Link to={links[i]} className='link'>{element}</Link>
            </div>))}
        </div>
    )
}