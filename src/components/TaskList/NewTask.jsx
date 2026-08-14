import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-600/90 rounded-xl p-5 flex flex-col justify-between text-white shadow-lg shadow-blue-600/10'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-red-600 text-white text-xs px-3 py-1 font-semibold rounded'>
            {data.category}
          </span>
          <span className='text-xs font-semibold text-gray-200'>{data.taskDate}</span>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-gray-100 leading-relaxed'>{data.taskDescription}</p>
      </div>
      <div className='mt-4'>
        <button className='bg-emerald-600 hover:bg-emerald-700 active:scale-[0.97] text-white text-xs font-medium py-2 px-4 rounded transition-all duration-150 w-full'>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;