import React from 'react';
import { Navbar, Footer, SameSection } from './components/index';
import './App.css'

function App() {

  // Scroll reveal hover effects

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='bg-[url("./assets/hotbird13g.webp")] bg-local pl-10 bg-center bg-cover bg-no-repeat h-[100vh]'>
          <SameSection subtitle="RECENT MISSION" title="EUTELSAT HOTBIRD 13G MISSION" button="REWATCH" />
        </div>
        <div className='bg-[url("./assets/starship-update.webp")] bg-local pl-10 bg-center bg-cover bg-no-repeat h-[100vh]'>
          <SameSection title="STARSHIP UPDATE" button="LEARN MORE" />
        </div>
        <div className='bg-[url("./assets/starship-moon.webp")] bg-local pl-10 bg-center bg-cover bg-no-repeat h-[100vh]'>
          <SameSection title="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON
" button="LEARN MORE" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
