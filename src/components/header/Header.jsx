import React from 'react'
import Hero from './hero/Hero'
import Navbar from './navbar/Navbar'


const Header = () => {
  return (
    <header>
        <Navbar />
        <Hero />  
    </header>
  )
}

export default Header