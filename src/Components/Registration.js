import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'; 

const Registration = () => {
  const navigate = useNavigate()

  const redirectToDashboard = () => {
    navigate('/dashboard')
  };

  return (
    <>
    <div className="dynamic-background"></div>
    <div id="forms-contain">
      <form className="form" onSubmit={redirectToDashboard}>
        <h2>Register Here</h2>
        <label htmlFor="user_name">Name:</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          required
        />
        <label htmlFor="phone">Phone No:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        <button type="submit">Register</button>
        <p>
          Already Have an Account?{' '}
          <Link to="/SignIn" id="link">
            Sign In
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Registration;
