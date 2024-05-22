import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavLinkClass = (path: string) => (
    location.pathname === path ? "text-pink-500 font-bold" : "text-gray-500 hover:text-pink-600"
  );

  return (
    <nav className={`sticky top-0 flex items-center justify-between py-3 bg-white ${isScrolled ? 'shadow-bottom' : ''}`}>
      <div className="text-xl font-bold transition-transform transform hover:scale-110 hover:text-pink-600">
        <a href="/">Andrew Jiang</a>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className={`${getNavLinkClass('/')}`}>Home</a>
          </li>
          <li>
            <a href="/blog" className={`${getNavLinkClass('/blog')}`}>Blog</a>
          </li>
          <li>
            <a href="/projects" className={`${getNavLinkClass('/projects')}`}>Projects</a>
          </li>
          <li>
            <a href="/resume" className={`${getNavLinkClass('/resume')}`}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
