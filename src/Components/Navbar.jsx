import React from 'react'
import './Navbar.css'
import logo from '../assets/logo_2.png'
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import profile from '../assets/profile_icon.jpg'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { logout } from '../Firebase';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left-navbar">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="right-navbar">
      <FiSearch className='icons icon' />
      <p>Children</p>
        <FaRegBell className='icons icon'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile' />
          <MdOutlineArrowDropDown className='icons' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar