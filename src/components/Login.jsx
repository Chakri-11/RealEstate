import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import House from "./images/house.jpg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setIsLoggedIn(true);
  };

  return (
    <div className="flex justify-center items-center h-screen text-black" style={{ backgroundImage: `url(${House})`, backgroundSize: 'cover' }}>
      <div className="p-8 rounded shadow-lg w-96  bg-opacity-80 backdrop-filter backdrop-blur-sm bg-NightShadow/30">
        {isLoggedIn ? (
          <h2 className="text-center text-2xl font-bold mb-4">Welcome back!</h2>
        ) : (
          <>
            <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Email:
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter Email"
                    className="block mt-2 p-2 px-3 w-full border border-gray-300 rounded"
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Password"
                    className="block mt-2 p-2 px-3 w-full border border-gray-300 rounded"
                  />
                </label>
                <br />
              </div>
              <button type="submit" className="mt-4 bg-green-500 text-white p-2 w-full">
                Login
              </button>
            </form>
            <div className="mt-4">
              <p className="text-center">
                <Link to="/register" className="text-slate-900">Sign Up</Link> | <Link to="/forgot-password" className="text-blue-500">Forgot Password</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Login;



