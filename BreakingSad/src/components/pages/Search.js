import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import CharList from '../CharList';
import '../../assets/css/Search.css'

const Search = (props) => {
  const [input, setInput] = useState('');
  const [charListDefault, setCharListDefault] = useState();
  const [charList, setCharList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:9000/api/v1/characters/')
      .then(response => response.json())
      .then(data => {
        setCharList(data) 
         setCharListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = charListDefault.filter(character => {
      return character.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCharList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <div className='search-container'>
      <h1>Character List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CharList charList={charList}/>
    </div>
   );
}

export default Search