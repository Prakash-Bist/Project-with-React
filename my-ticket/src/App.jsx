import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Flightcard from "./components/Flightcard";
import Cursor from "./components/Cursor";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Question from "./components/Question";
import Visit from "./components/Visit";
import Show from "./components/Show";

function App() {


  return (
    <>
     <Navbar/> 
       <Cursor/>
      
     <Carousel/>
     <Visit/>
     <Show/>
      <Question/>
     <Footer/>
    
   
    </>
  )
}

export default App
