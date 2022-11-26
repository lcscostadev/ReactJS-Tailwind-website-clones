import React from 'react';
import { Navbar, LeftContent, RightContent } from './components';
import { tv, device, child, mobile } from './assets';
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <LeftContent title="Enjoy on your TV." paragraph="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image={tv} />
      <RightContent title="Watch everywhere." paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." image={device} />
      <LeftContent title="Create profiles for kids." paragraph="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." image={child} />
      <RightContent title="Download your shows to watch offline." paragraph="Available on all plans except Basic with ads." image={mobile} />
    </>

  )
}

export default App
