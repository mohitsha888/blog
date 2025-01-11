'use client';
import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="max-w-2xl bg-white rounded-lg shadow p-6">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between py-4 border-b">
            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={() => setSettings(prev => ({ ...prev, [key]: !value }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
