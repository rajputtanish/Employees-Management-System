import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#111111]'>
      <div className='border-2 border-emerald-600 rounded-xl p-20 shadow-lg shadow-emerald-950/40'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full text-white placeholder:text-gray-400 focus:border-emerald-500 focus:scale-105 transition-all duration-200'
            type='email'
            placeholder='Enter your email'
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full text-white placeholder:text-gray-400 mt-4 focus:border-emerald-500 focus:scale-105 transition-all duration-200'
            type='password'
            placeholder='Enter password'
          />
          <button className='text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2.5 px-8 rounded-full mt-7 w-full active:scale-95 transition-all duration-150'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;