import React, { useEffect } from 'react'
import Home from './Pages/Home'
import { Route, Routes, useNavigate } from 'react-router'
import Login from './Pages/Login'
import Player from './Pages/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged In")
        navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/player/:id' element ={<Player/>} />
      </Routes>
    </div>
  )
}

export default App