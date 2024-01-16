import React, { useState, useEffect } from 'react';

import './App.css';

import MovieCard from './movie';



const API_URL = 'http://www.omdbapi.com?apikey=5ed909c8';



const App = ()=> {

  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('money heist');
  },[])

  return (
    <div className="App">
      <h1>Movie Island</h1>

      <div className='searchBar'>
        <input placeholder='Seach Movies' value={searchTerm} onChange={(e)=> setSearchTerm (e.target.value)}/>
        <button onClick={()=>{searchMovies(searchTerm)}} >Search</button>
      </div>

     
      {
        movies?.length>0 ?
        (
      <div className='container'>
      
          {movies.map((movie)=>(
            <MovieCard movie={movie} />
        ))}
        </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
