import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/Hero/Hero'
import Partner from '../Components/Partner/Partner'
import Earn from '../Components/Earn/Earn'

const Home = () => {
  return (
    <div>
        <div  className='bg-[#00674B]'>
        <NavBar/>
        </div>
        <Hero/>
        <Partner/>
        <Earn/>

    </div>
  )
}

export default Home