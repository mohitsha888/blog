'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore</h1>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-12 border rounded-lg"
          />
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add search results */}
      </div>
    </div>
  );
}