import React, { useState } from 'react';
import './index.css'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add your form submit logic here, like sending to a server
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-96 p-6 text-center border border-gray-300 backdrop-blur-md bg-opacity-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl mb-6 text-white font-bold">Login</h2>
          
          <div className="relative mb-4">
            <input type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email" 
              className="w-full p-2 bg-transparent border-b-2 border-gray-400 text-white outline-none focus:border-white"
            />
            <label className="absolute top-1/2 left-0 text-gray-400 text-lg transform -translate-y-1/2 transition-all duration-150 ease-in-out" >
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              className="w-full p-2 bg-transparent border-b-2 border-gray-400 text-white outline-none focus:border-white"
            />
            <label className="absolute top-1/2 left-0 text-gray-400 text-lg transform -translate-y-1/2 transition-all duration-150 ease-in-out">
            </label>
          </div>

          <div className="flex justify-between text-white mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="accent-white mr-2" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded-lg transition-all duration-150 hover:bg-gray-700 hover:text-white"
          >Login In
          </button>

          <div className="mt-6 text-white">
            <p>Don't have an account? <a href="#" className="text-blue-400 hover:underline">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
