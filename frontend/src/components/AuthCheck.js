'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const publicRoutes = ['/login', '/register'];

export default function AuthCheck({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !publicRoutes.includes(pathname)) {
      router.push('/login');
    } else if (token && publicRoutes.includes(pathname)) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated && !publicRoutes.includes(pathname)) {
    return null;
  }

  return children;
}