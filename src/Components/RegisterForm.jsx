import React, { useState } from 'react';
import registerImage from '../images/jonas-lee-o6elTKWZ5bI-unsplash.jpg'; 

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        setSuccess(true);
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError('An error occurred');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-4 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Create Account
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">User registered successfully</p>}
        </div>
        <div className="md:w-1/2 relative hidden md:block">
          <img src={registerImage} alt="Registration" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            <p>Join Us Now!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
