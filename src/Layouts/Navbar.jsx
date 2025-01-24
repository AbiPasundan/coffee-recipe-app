import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../components/link/NavLink';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className=" navbar bg-coffee-100 shadow-md dark:bg-darkCoffee-800">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl text-coffee-800 dark:text-coffee-50" href="/">
          Recipe Coffee
        </a>
      </div>
      <div className="navbar-center hidden text-2xl lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink link="/" text="Home" />
          <NavLink link="/Recipe" text="Recipe" />
          <NavLink link="/Learn" text="Learn" />
          <NavLink link="/About" text="About" />
          <NavLink link="/contact" text="Contact" />
        </ul>
      </div>
      <div className="navbar-end text-2xl">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-coffee-50 dark:bg-darkCoffee-700 rounded-box w-52"
          >
            <li><Link to="/" className="dark:text-coffee-50">Home</Link></li>
            <li><Link to="/menu" className="dark:text-coffee-50">Menu</Link></li>
            <li><Link to="/learn" className="dark:text-coffee-50">Learn</Link></li>
            <li><Link to="/about" className="dark:text-coffee-50">About</Link></li>
            <li><Link to="/contact" className="dark:text-coffee-50">Contact</Link></li>
          </ul>
        </div>
        <button
          onClick={toggleTheme}
          className="ml-4 btn btn-ghost btn-circle"
        >
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v2m6.36-1.36l-1.42 1.42m4.24 4.24h-2m1.36 6.36l-1.42-1.42m-6.36 4.24v-2m-6.36 1.36l1.42-1.42m-4.24-4.24h2m-1.36-6.36l1.42 1.42M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
