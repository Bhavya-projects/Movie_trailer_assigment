import React from 'react';
import {useLocation} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const API_IMG = "https://image.tmdb.org/t/p/w500/"
function Previewmovie() {
    const location = useLocation();
  return (
    <div className='previewContainer m-0'>
        <div className='previewGrid'>
            <div className='previewTxt'>
                <BsArrowLeft/>
                <h2 className='mt-4 '>{location.state.title}</h2>
                <p>Rating: {location.state.vote_average/2}/5</p>
                <p>{location.state.overview}</p>
                <div className='d-flex previewdate'>
                <p>Release Date</p>
                <p>{location.state.release_date}</p>
                </div>
                <div className='d-flex previewdate'>
                <p>Orignal Language</p>
                <p>{location.state.original_language}</p>
                </div>
            </div>
            <div className='previewImage'>
            <img className='card-img' src={API_IMG + location.state.poster_path} alt={location.state.title}></img>
            </div>
        </div>       
    </div>
  );
}

export default Previewmovie;
