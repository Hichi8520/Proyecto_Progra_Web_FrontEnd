import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import '../../assets/css/App.css'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'
import Cards from '../Cards'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Home extends Component {
    render() {
        // console.log(cookies.get('id'));
        // console.log(cookies.get('first_name'));
        // console.log(cookies.get('last_name'));
        // console.log(cookies.get('username'));
        return (
            <>
                <HeroSection />
                <Cards />
            </>
        );
    }
}

export default Home;