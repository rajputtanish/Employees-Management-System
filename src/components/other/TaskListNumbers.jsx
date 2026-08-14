import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex justify-between gap-5 mt-4'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-500/80 shadow-lg shadow-blue-500/10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium mt-1'>New Tasks</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-500/80 text-black shadow-lg shadow-yellow-500/10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium mt-1'>Active Tasks</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-500/80 shadow-lg shadow-green-500/10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium mt-1'>Completed Tasks</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500/80 shadow-lg shadow-red-500/10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium mt-1'>Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;