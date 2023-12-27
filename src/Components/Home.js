

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <>
      <div className="dynamic-background"></div>
      <nav className="nav_bar">
        <Link to="/">Home</Link>
        <Link to="/SignIn">Sign-In</Link>
        <Link to="/Registration">Registration</Link>
        <Link to="/dashboard">DashBoard</Link>
      </nav>
      <div>
        <h1>Welcome to IBS </h1>
        <p className='para'>Explore the world of fast processing banking...</p>
      </div>
      <Outlet />
    </>
  );
};

export default Home;