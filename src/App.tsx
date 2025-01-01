import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Welcome from "./components/blog/welcome/Welcome";
import Grade9 from "./components/blog/gr9/Grade9";
import Grade10 from "./components/blog/gr10/Grade10";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col max-w-4xl min-h-screen p-4 mx-auto text-justify">
        <header className="sticky top-0 z-50 bg-white">
          <Navbar />
        </header>
        <main>
          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/resume" element={<Resume />} />

              <Route path="/blog" element={<Blog />} />

              <Route path="/blog/welcome" element={<Welcome />} />

              <Route path="/blog/grade-9" element={<Grade9 />} />

              <Route path="/blog/grade-10" element={<Grade10 />} />

          </Routes>
        </main>
        <footer className="mt-auto">
          <Bottombar />
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
