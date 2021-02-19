import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../assets/css/App.css'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'
import Cards from '../Cards'

function Home () {
    return (
        <>
            <HeroSection/>
            <Cards />
        </>
    );
}

export default Home;