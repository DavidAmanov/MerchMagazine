import React from 'react';
import './topMenu.css'


export default function Menu (){
    const titles = ['Products','About Us','Cart']
    return(
        <div className='menuMarkup'>
        {titles.map((element, i) => (
            <div className='menuItem' key={i}>
             <a className='link'>{element}</a>
            </div>))}
        </div>
    )
}