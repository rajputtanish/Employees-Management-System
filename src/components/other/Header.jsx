import React from 'react';

const Header = ({ changeUser, data }) => {
  const handleLogOut = () => {
    localStorage.removeItem('loggedInUser');
    changeUser('');
  };

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>
        Hello, <br />
        <span className='text-4xl font-semibold text-emerald-500'>
          {data ? data.firstName : 'Admin'} 👋
        </span>
      </h1>
      <button
        onClick={handleLogOut}
        className='bg-red-600 hover:bg-red-700 active:scale-95 text-white text-lg font-medium px-5 py-2 rounded-sm transition-all duration-150'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;