import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Redirect, Route } from 'react-router-dom';

import axios from 'axios'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Stories from './components/Stories/Stories'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import Alumni from './components/Alumni/Alumni'
import Home from './components/Home'
export class App extends Component {
    constructor(){
        super()
  }

  render() {
    return (
      <div> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/alumni" element={<Alumni/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    )
  }
}

export default App