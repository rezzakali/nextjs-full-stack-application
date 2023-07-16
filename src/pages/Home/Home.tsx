'use client';

import { Button } from '@/components/MTComponents/MTComponents';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Home = () => {
  const router = useRouter();

  const handleLoggout = async () => {
    try {
      const res = await axios.get('/api/users/logout');
      if (res.status === 200) {
        toast.success(res?.data?.message);
        router.push('/login');
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <Button onClick={handleLoggout}>Logout</Button>
    </div>
  );
};

export default Home;
