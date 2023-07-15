import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
