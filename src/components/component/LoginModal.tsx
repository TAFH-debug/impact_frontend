"use client"

import { useState } from "react";

export default function LoginModal({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = btoa(`${username}:${password}`);
    const response = await fetch('http://157.230.239.9:3000/admin/check', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });
    const json = await response.json()
  
    if (!response.ok) {
      console.error('Error:', json.message);
      return;
    }
    onClose();
  };
  

  return (
    <div className="fixed inset-0 flex bg-black items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-black text-center">Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-black w-full text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
