import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import requests from '../services/requests'
function Banner() {

    const [movie, setmovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignals)
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        }
        fetchData()

    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='text-white object-contain h-[30rem]' style={{ backgroundSize: "cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundPosition: "center center", }}>
            <div className='ml-8 pt-36 h-[23rem] '>
                <h1 className='text-5xl font-extrabold pb-2 '>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='p-5'>
                    <button className='cursor-pointer text-white font-bold rounded-sm px-8 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] hover:transition-all py-2'>Play</button>
                    <button className='cursor-pointer text-white font-bold rounded-sm px-8 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] hover:transition-all py-2'>My List</button>
                </div>

                <h1 className='w-96 leading-5 pt-4 text-sm h-20'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='h-28  bg-gradient-to-b from-transparent  to-[#111]' />
        </header>
    )
}

export default Banner