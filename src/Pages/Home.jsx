import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import hero from '../assets/banner_hero.jpg'
import title from '../assets/title_banner-transparent.png'
import { FaPlay } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src= {hero} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={title} alt="" className='caption-img'/>
          <p>Infinity War revolves around the themes of sacrifice, the consequences of power, and the struggle between good and evil. Infinity War presents a complex narrative that challenges characters.</p>
          <div className="hero-btns">
            <button className='btn'><FaPlay/> Play</button>
            <button className='btn dark-btn'><LuInfo/> More info</button>
          </div>
          <div className="title-card">
          <Cards/>
          </div>
         
        </div>
      </div>
      <div className="more-cards">
        <Cards title = {"Blockbuster Movies"} category={'popular'}/>
        <Cards title = {"Only on Netflix"} category={'top_rated'}/>
        <Cards title = {"Upcomings"} category={'upcoming'}/>
        <Cards title = {"Top Pics for You"} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home