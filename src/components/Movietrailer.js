import { useEffect, useState } from 'react';
import Moviegallery from './Moviegallery';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Form, Button, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f31acf27f28072b388cd2f7f29f82107";
// const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=f31acf27f28072b388cd2f7f29f82107&query";

function Movietrailer() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data =>{
      console.log(data);
      setMovies(data.results);
    })
  },[])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <div className='container'>
      <Form className='d-flex m-5 position-relative' onSubmit={searchMovie}>
          <FormControl
          type="Search"
          placeholder="Movie Search"
          className="me-2"
          name="query"
          value={query}
          onChange={changeHandler}
          >
          </FormControl>
          <Button className='form-btn' variant="primary" type="submit"><FaSearch/></Button>
        </Form>
      <div className='grid'>
      {movies.map((movieReq)=>
      <Moviegallery key={movieReq.id} {...movieReq}/>)}
      </div>
      <Pagination/>
    </div>
    </>
  );
}

export default Movietrailer;
