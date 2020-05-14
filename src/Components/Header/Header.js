import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <img src={logo} alt=""/>
            <nav>
                <a href="review">Review</a>
                <a href="order">Order</a>
                <a href="manage">Manage inventory</a>
            
            </nav>
        </div>
    );
};

export default Header;