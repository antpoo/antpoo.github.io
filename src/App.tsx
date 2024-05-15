import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Bb from "./components/Bb";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="">
        <div className="max-w-4xl p-4 mx-auto">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/test">
              <Bb />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
