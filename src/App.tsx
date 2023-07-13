import React from 'react';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Projects from './components/pages/Projects';
import Achievements from './components/pages/Achievements';
import './App.css';

function App() {
  return (
    <main className='text-gray-300 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Achievements />
    </main>
  );
}

export default App;
