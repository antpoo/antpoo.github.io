import React from 'react';
import Top from './components/Top';
import About from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className='text-gray-400 bg-gradient-to-r from-blue-900 to-purple-900 body-font'>
        <Navbar />
        <Switch> 
          
          <Route exact path='/'>
            <Top />
            <About />
            <Contact />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/achievements'>
            <Achievements />
          </Route>

          <Route exact path='/blog'>
            <Blog />
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;
