import React from 'react';
import LogoImg from '../img/logo.png'

const NavBar = () => {
    return (
        <nav>
            <img src={LogoImg} alt='logo' className='nav--logo' />
        </nav>
    );
}

export default NavBar;
