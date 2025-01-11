'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  Library, 
  Search, 
  Settings, 
  User,
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Discover', icon: Compass, path: '/discover' },
    { name: 'Library', icon: Library, path: '/library' },
    { name: 'Explore', icon: Search, path: '/explore' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="fixed left-0 h-screen w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Blog App</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg mb-2 ${
                pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t">
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              window.location.href = '/login';
            }}
            className="flex items-center gap-4 px-4 py-3 w-full hover:bg-gray-50 rounded-lg text-red-600"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
