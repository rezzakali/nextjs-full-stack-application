import { Metadata } from 'next';
import Login from '../../pages/Login/Login';

export const metadata: Metadata = {
  title: 'Nextjs Full-Stack - Login',
  description: 'Login Page',
};

const page = () => {
  return <Login />;
};

export default page;
