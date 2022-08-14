import React, { useState, useEffect } from 'react';
import axios from "../services/axios";
import youtube from "react-youtube"
import YouTube from 'react-youtube';
import { GrPlay } from "react-icons/gr"
function Row({ title, fetchUrl, isLargeRow }) {
    const baseURL = "https://image.tmdb.org/t/p/original/";
    const [movies, setmovies] = useState([])
    const [trailerurl, settrailerurl] = useState('')
    const opts = {
        heigth: "390",
        width: "100%",
        autoplay: 1
    }
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request;
        }
        fetchdata();
    }, [fetchUrl])

    return (
        <div className='ml-5 text-white'>
            <h2>{title}</h2>
            <div className="flex flex-row overflow-y-hidden overflow-x-scroll p-5">
                {movies.map(movie => (
                    <img key={movie.id} className={`w-full object-contain max-h-24 mr-2 transition-transform duration-300 hover:scale-110 ${isLargeRow && "max-h-56 hover:scale-115"}`}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            <div className='text-red-600 h-5 w-5'>
                <GrPlay className='' />
            </div>
            {/* <YouTube videoid={trailerurl} opts={opts} /> */}
        </div>
    )
}

export default Row