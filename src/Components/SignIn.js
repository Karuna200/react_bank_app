import React from 'react'
import './Registration.css'


const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Form Submitted');
  };

  return (
    <>
     <div className="dynamic-background"></div>
    <div id="forms-contain">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
  );
};

export default SignIn;

