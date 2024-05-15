import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="body-font">
        <div className="max-w-4xl p-4 mx-auto">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
