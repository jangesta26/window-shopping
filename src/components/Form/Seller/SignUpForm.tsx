'use client'
import Email from '@/Icons/Email';
import EyeClosed from '@/Icons/EyeClosed';
import EyeOpen from '@/Icons/EyeOpen';
import User from '@/Icons/User';
import React, { useState } from 'react';

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="relative -mt-40 m-4">
      <form 
      className="bg-white/90 max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl font-bold text-center">Register</h3>
        </div>
        <div>
          <label className="text-gray-800 text-xs block mb-2">Full Name</label>
          <div className="relative flex items-center">
            <input
              name="name"
              type="text"
              required
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary/80 px-2 py-3 outline-none"
              placeholder="Enter name"
            />
            <User />
          </div>
        </div>
        <div className="mt-8">
          <label className="text-gray-800 text-xs block mb-2">Email</label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="text"
              required
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary/80 px-2 py-3 outline-none"
              placeholder="Enter email"
            />
            <Email />
          </div>
        </div>
        <div className="mt-8">
          <label className="text-gray-800 text-xs block mb-2">Password</label>
          <div className="relative flex items-center">
            
            <input
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-primary/80 px-2 py-3 outline-none"
              placeholder="Enter password"
            />
            { password && (
              <button
              type='button'
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out"
              aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              >
              {passwordVisible ? (<EyeOpen />) : (<EyeClosed />)}

              </button>
              
            )}
           
          </div>
        </div>
        <div className="flex items-center mt-8">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
          <label className="ml-3 block text-sm">
            I accept the{' '}
            <a href="#" className="text-primary/80 font-semibold hover:underline ml-1">
              Terms and Conditions
            </a>
          </label>
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none transition-all"
          >
            Register
          </button>
          <p className="text-gray-800 text-sm mt-8 text-center">
            Already have an account?{' '}
            <a href="/seller/signin" className="text-primary/80 font-semibold hover:underline ml-1">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
);
};

export default SignUpForm;
