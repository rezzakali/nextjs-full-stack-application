import Register from '@/pages/Register/Register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nextjs Full-Stack - Register',
  description: 'Register Page',
};

const page = () => {
  return <Register />;
};

export default page;
