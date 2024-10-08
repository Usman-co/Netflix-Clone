import React, { useEffect, useRef, useState } from 'react'
import './Cards.css'
import {Link} from 'react-router-dom'

const Cards = ({title, category}) => {
  const [apiData, setApiData] = useState([])
  const cardRef = useRef()

  const handleWheel = (e) =>{
    e.preventDefault()
    cardRef.current.scrollLeft += e.deltaY
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTNhYTY4NjNhYzkzYjI3MzZhYWZiM2Q3NWFjMDNjMyIsIm5iZiI6MTcyODIyOTQ0MC4wMzYyNTIsInN1YiI6IjY3MDJhZGQ4ZjM0OTVkNzJjNGY3YmZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytTqpuhAIree73eizq4uAr0NuLNShhqLtpY1OT-bliQ'
    }
  };
  

  useEffect(()=> {
  
    fetch(`https://api.themoviedb.org/3/movie/${category?category: "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

  cardRef.current.addEventListener('wheel', handleWheel)
  },[])

  return (
    <div className='cards'>
     <h2>{title?title: "Popular on Netflix"}</h2>
     <div className="cards-list" ref={cardRef}>
      {apiData.map((card, index) => {
        return <Link to = {`/player/${card.id}`} className="card" key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
        </Link>
      })}
     </div>
    </div>
  )
}

export default Cards