import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Nav />
      <main className="m-4">
        {children}
        <ToastContainer position="bottom-left" />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
