import React from 'react'
import "./App.css"
import { Article, Brand, Cta, NavBar } from './Components'
import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './Container'

const App = () => {
  return (
    <div className='app'>
      <div className = "gradient_bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
     
    </div>
  )
}

export default App