import React, { useState, useEffect } from 'react'
import '../../assets/css/Search.css'
import SearchBar from '../SearchBar'



export default function Search() {
    const [input, setInput] = useState('');

    return <div className='search'>
    <h1>Search characters </h1>
    <br/><br/>
    <input/>
    </div>;
}