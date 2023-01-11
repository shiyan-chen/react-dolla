import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/Data'
import Services from '../components/Services'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prevData) => !prevData)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
    </>
  )
}

export default Home
