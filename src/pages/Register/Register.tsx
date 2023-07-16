'use client';

import {
  Button,
  Card,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from '@/components/MTComponents/MTComponents';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, password } = user || {};
    if (!name || !email || !password) {
      toast.warning('Empty field is required!');
    }
    setLoading(true);
    try {
      const res = await axios.post(`/api/users/register`, user);
      setLoading(false);
      toast.success(res?.data?.message);
      router.push('/login');
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="md"
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
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
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />

          <Button type="submit" className="mt-6" fullWidth disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className="h-3 w-3 mx-2" /> Registering...
              </div>
            ) : (
              'Register'
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
