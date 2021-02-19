import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../assets/css/App.css'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'

function Home () {
    return (
        <>
            <HeroSection/>
        </>
    );
}

export default Home;