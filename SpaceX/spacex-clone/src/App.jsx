import React from 'react';
import { Navbar, HotbirdSection, Footer } from './components/index';
import './App.css'

function App() {

  // Scroll reveal hover effects

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HotbirdSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
