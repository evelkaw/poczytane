import React from 'react';
import poczytane from '../../images/poczytane.png';
import './Navbar.css';


export default function Navbar() {
    return (
        <div className='nav'>
            <nav className='nav__logo'>
                <img src={poczytane} alt='poczytane' className='nav__img'/>
            </nav>
        </div>
    );
};
