import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <main className='text-gray-400 bg-gradient-to-r from-blue-900 to-orange-900 body-font'>
      <Navbar />
      <About />
      <Interests />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}

export default App;
