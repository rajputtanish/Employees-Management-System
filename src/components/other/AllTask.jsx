import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className='bg-[#2c2c2c] p-6 rounded-lg flex flex-col gap-3 max-h-80 overflow-y-auto mt-4' id='all-tasks-list'>
      {/* Table Headers */}
      <div className='bg-emerald-500 text-white font-semibold py-3 px-4 rounded flex justify-between items-center text-sm sticky top-0'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5 text-center'>New Tasks</h3>
        <h3 className='w-1/5 text-center'>Active Tasks</h3>
        <h3 className='w-1/5 text-center'>Completed</h3>
        <h3 className='w-1/5 text-center'>Failed</h3>
      </div>

      {/* Table Rows */}
      {userData ? (
        userData.map((elem, idx) => (
          <div
            key={idx}
            className='border-[1px] border-emerald-600 bg-transparent text-white py-3 px-4 rounded flex justify-between items-center text-sm hover:bg-[#343434] transition-all duration-150'
          >
            <h2 className='w-1/5 font-semibold text-emerald-400'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-center text-blue-400 font-bold'>{elem.taskCounts.newTask}</h3>
            <h3 className='w-1/5 text-center text-yellow-400 font-bold'>{elem.taskCounts.active}</h3>
            <h3 className='w-1/5 text-center text-green-400 font-bold'>{elem.taskCounts.completed}</h3>
            <h3 className='w-1/5 text-center text-red-500 font-bold'>{elem.taskCounts.failed}</h3>
          </div>
        ))
      ) : (
        <p className='text-gray-400 text-center py-4'>No Employee Data Available.</p>
      )}
    </div>
  );
};

export default AllTask;