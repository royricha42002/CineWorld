import { useEffect , useState} from "react";
import React from 'react';
import './App.css'
import MovieCard from './MovieCard'


const API_URL = 'https://www.omdbapi.com?apikey=2824aaed'

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const movie1 = {
  //   'Poster': "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  //   'Title': "Italian Spiderman",
  //   'Type': "movie",
  //   'Year': "2007",
  //   'imdbID': "tt2705436"
  // }  
  
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() =>{
    searchMovies('Spiderman');
  },[])

  return (
    <div className="app">
      <h1>CineSearch</h1>
      <div className="search">
        <input 
        placeholder="Search Movies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        /> 
      </div>

      {
        movies?.length >0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No such movie found</h2>
          </div> 
        )
      }

    </div>
    

  );
}

export default App;
