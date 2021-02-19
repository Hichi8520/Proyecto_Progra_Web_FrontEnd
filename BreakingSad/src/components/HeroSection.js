import React from 'react'
import '../assets/css/App.css';
import { Button } from './Button';
import '../assets/css/HeroSection.css'
import CustomizeImg from '../assets/images/Customize.jpg';

function HeroSection() {
    return (
        <div className='hero-container'>

            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                CHARACTERS
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                EPISODES
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                QUOTES
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                CUSTOMIZE
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
