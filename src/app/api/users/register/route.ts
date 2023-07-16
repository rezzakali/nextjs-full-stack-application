import dbConnect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    if (!name) {
      return NextResponse.json(
        { message: 'Name is required!' },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required!' },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: 'Password is required!' },
        { status: 400 }
      );
    }

    // hashed passwod
    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnect();

    const user = await User.findOne({ email });

    // check if user already exists or not
    if (user) {
      return NextResponse.json(
        { message: 'User already exists!' },
        { status: 409 }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set!');
    }

    // Generate a token using user's email as the payload
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '7d', // Token expiration time (adjust as needed)
    });

    // new user
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      token,
    });

    // save the user to db
    await newUser.save();

    // Send the response with the token
    return NextResponse.json({ message: 'User created successfully', token });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
