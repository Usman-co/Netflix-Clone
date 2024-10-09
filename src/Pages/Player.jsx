import React, { useEffect, useState } from 'react'
import './Player.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router';

const Player = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTNhYTY4NjNhYzkzYjI3MzZhYWZiM2Q3NWFjMDNjMyIsIm5iZiI6MTcyODIyOTQ0MC4wMzYyNTIsInN1YiI6IjY3MDJhZGQ4ZjM0OTVkNzJjNGY3YmZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytTqpuhAIree73eizq4uAr0NuLNShhqLtpY1OT-bliQ'
    }
  };
   
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      if(response.results && response.results.length > 0) {
          setApiData(response.results[0]);
      } else {
         
          console.error("No video found for this movie");
      }
   })
   .catch(err => console.error(err));;
  },[id])


  return (
    <div className='player'>
      <FaArrowLeft className='icon' onClick={()=>{navigate('/')}}/>
      <iframe style={{width:"90%", height:"90%"}}  src={apiData.key ? `https://www.youtube.com/embed/${apiData.key}` : ''} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player