import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Welcome from "./components/blog/welcome/Welcome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col max-w-4xl min-h-screen p-4 mx-auto">
        <header className="sticky top-0 z-50 bg-white">
        <Navbar />
        </header>
        <main>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>

            <Route exact path="/resume">
              <Resume />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/blog/welcome">
              <Welcome />
            </Route>

          </Switch>

        </main>
        <footer className="mt-auto">
          <Bottombar />
        </footer>
      </div>
    </Router>
  );
}

export default App;
