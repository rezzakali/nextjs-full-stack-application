import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main>
        {children}
        <ToastContainer position="bottom-left" />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
