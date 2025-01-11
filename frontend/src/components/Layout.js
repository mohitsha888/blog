import { Toaster } from 'react-hot-toast';
import Sidebar from '@/components/Sidebar';
import AuthCheck from '@/components/AuthCheck';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">
            <AuthCheck>{children}</AuthCheck>
          </main>
        </div>
      </body>
    </html>
  );
}