'use client';

import {
  Button,
  Card,
  Input,
  Spinner,
  Typography,
} from '@/components/MTComponents/MTComponents';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { email, password } = user || {};

    if (!email || !password) {
      toast.warning('Empty field is required!');
    }

    setLoading(true);
    try {
      const res = await axios.post(`/api/users/login`, user);
      setLoading(false);
      toast.success(res?.data?.message);
      router.push('/');
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="md"
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              size="md"
              name="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className="h-3 w-3 mx-2" /> signing...
              </div>
            ) : (
              'Login'
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don&apos;t have an account ?{' '}
            <a
              href="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
