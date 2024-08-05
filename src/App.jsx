import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/navbar'
import HeroSection from './Component/hero'
import Cart from './Component/cart'
import Contact from './Component/contact'
import Footer from './footer'
import Chefs from './chefs'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Cart />
      <Chefs />
      <Contact />
      <Footer />
       

    </>
  )
}


export default App
