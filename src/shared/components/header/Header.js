import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                POC Shop
            </div>
            <input className="search" type="search" />
        </header>
    )
}

export default Header;