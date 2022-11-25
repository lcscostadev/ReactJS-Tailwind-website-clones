import React from 'react';
import { Navbar, LeftContent, RightContent } from './components';
import { tv } from './assets';
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <LeftContent title="Enjoy on your TV." paragraph="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image={tv} />
    </>

  )
}

export default App
