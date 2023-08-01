import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <main className='text-gray-400 bg-gradient-to-r from-blue-900 to-orange-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Achievements />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
