import { useState } from 'react'
import './App.css'
import {  Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Flightcard from "./components/Flightcard";
import Footer from "./components/Footer";
import Question from "./components/Question";
import Visit from "./components/VisitNepal";
import Show from "./components/Show";
import Home from "./components/Home";
import Ticketstatus from './components/Ticket status';
import Help from './components/Help';
import Holiday from './components/Holiday';
import Flightroutes from './components/Flightroutes';
import Loginpage from './components/Loginpage';
import VisitNepalBanner from './components/Show';
import VisitNepal from './components/VisitNepal';
import Plan from './components/Plan';



function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/show" element={<Show />} />
          <Route path="/question" element={<Question />} />
          <Route path="/ticketstatus" element={<Ticketstatus />} />
          <Route path="/help" element={<Help />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/flightroutes" element={<Flightroutes />} />
          <Route path="/loginpage" element={<Loginpage />}  />
          <Route path="/plan" element={<Plan/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
