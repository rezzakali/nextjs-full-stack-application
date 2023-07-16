'use client';

import {
  Button,
  Card,
  Input,
  Typography,
} from '@/components/MTComponents/MTComponents';

import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(user);
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
              size="lg"
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              size="lg"
              name="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Login
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
