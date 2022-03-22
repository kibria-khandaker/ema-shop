import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header_section'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='header_menu'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;