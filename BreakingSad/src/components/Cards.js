import React from 'react'
import CardItem from './CardItem'
import '../assets/css/Cards.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Characters from '../components/pages/Characters';
import Episodes from '../components/pages/Episodes';
import Quotes from '../components/pages/Quotes';
import Customize from '../components/pages/Customize';

import CharacterImg from '../assets/images/Characters.jpg';
import EpisodesImg from '../assets/images/Episodes.jpg';
import QuotesImg from '../assets/images/Quotes.jpg';
import CustomizeImg from '../assets/images/Customize.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Main Menu</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={CharacterImg}
                        text='Look into the lives of every character from the series'
                        label='Characters'
                        path='/characters'
                        />
                        <CardItem
                        src={EpisodesImg}
                        text='A list of all the episodes from start to finish'
                        label='Episodes'
                        path='/episodes'
                        />
                        <CardItem
                        src={QuotesImg}
                        text='Get a random quote from a character in the Breaking Bad universe'
                        label='Quotes'
                        path='/quotes'
                        />
                        <CardItem
                        src={CustomizeImg}
                        text='Create, edit or delete your own characters'
                        label='Customize'
                        path='/customize'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
