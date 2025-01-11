'use client';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  if (!user) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        {/* Add more profile sections */}
      </div>
    </div>
  );
}