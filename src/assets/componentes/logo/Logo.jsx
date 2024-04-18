import { useState } from 'react'
import App from '../../../App'
import './Logo.css';
import Logo2 from './logo2.png'
export const Logo = () => {
    return (

        <>
            <div className="logo-space">
                <img className='logo-img' src={Logo2} />
            </div>
            <div className="titulo">
            <h1>AJRM Team</h1>
            </div>
        </>
    )
};
