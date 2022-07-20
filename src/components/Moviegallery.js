import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {useNavigate} from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/"
function Moviegallery({ title, poster_path, vote_average,id,overview,release_date,original_language}) {
    const [show, setShow] = useState("");
    const showMovie = async(e)=> {
        // e.preventDefault();
        console.log("show");
        try{
            const url=`https://api.themoviedb.org/3/movie/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093&movie_id=${id}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setShow(data.results);
          }
          catch(e){
            console.log(e);
          }
    }
    const history = useNavigate();

    const handleShow = () => {
        showMovie();
        history("preview",{state:{title: title,vote_average:vote_average,overview:overview,poster_path:poster_path,release_date:release_date,original_language:original_language}});
        console.log(show)
    }
    return (
        <div className='card'>
            <div role="button" onClick={handleShow} className='card-body p-0'>
                <img className='card-img' src={API_IMG + poster_path} alt={title}></img>
                <div className='card-txt'>
                    <p className='m-0'>{title}</p>
                    <div className='d-flex align-items-center'>
                    <AiFillStar fill="#f4ae4d"/>
                    <p className='m-0 pl-1'>{vote_average/2}/5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Moviegallery;