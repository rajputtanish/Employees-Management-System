import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-600/90 rounded-xl p-5 flex flex-col justify-between text-black shadow-lg shadow-yellow-600/10'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-red-600 text-white text-xs px-3 py-1 font-semibold rounded'>
            {data.category}
          </span>
          <span className='text-xs font-semibold text-gray-800'>{data.taskDate}</span>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-gray-900 leading-relaxed'>{data.taskDescription}</p>
      </div>
      <div className='flex justify-between items-center gap-3 mt-4'>
        <button className='bg-green-600 hover:bg-green-700 active:scale-95 text-white text-xs font-medium py-1.5 px-3 rounded transition-all duration-150 w-1/2'>
          Mark as Completed
        </button>
        <button className='bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-medium py-1.5 px-3 rounded transition-all duration-150 w-1/2'>
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;