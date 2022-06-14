import React, {useEffect,useState} from 'react';

import Movie from './components/Movie';

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?api_key=2baa49f27ec5d798d264b0a0b571d5c0"
const SEARCH_API = "";

function App() {
  const [movies,setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
     getMovies(FEATURED_API);
   },[]);

   const getMovies = (API) => {
   fetch(API)
   .then(res => res.json())
   .then(data => {
     console.log(data);
     setmovies(data.results);
   });
  }

   
   const handleOnsubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API + searchTerm);
      

    setSearchTerm('');
  }
  };
    

    

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return ( 
    <>
    <header>
    <div class="btn-text-center">
  	<button type="button" class="btn btn-primary">Book Ticket</button>
</div>
    
      <form onSubmit={handleOnsubmit}>
      <input className="search" type="search" placeholder="Search...." value={searchTerm} onChange={handleOnChange} />
      
      </form>
    </header>
  <div className="movie-container">
    
    { movies.length > 0 && movies.map(movie => (
      <Movie key={movie.id} {...movie} />
      
    ))}
    
  </div>
 
  </>
  ); 
}

export default App;
