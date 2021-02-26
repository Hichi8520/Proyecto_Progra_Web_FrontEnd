import React from 'react'
import '../assets/css/App.css';
import { Button } from './Button';
import '../assets/css/HeroSection.css'
import CustomizeImg from '../assets/images/Customize.jpg';
import logo from '../assets/images/Logo Breaking Sad.png'

function HeroSection() {
    return (
        <div className='hero-container'>

            <img src={logo} alt="Logo"/>
            <p>The unofficial Breaking Bad App/Website</p>
            <div className='hero-btns'>
                
            </div>
        </div>
    )
}

export default HeroSection
