import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    // Immutably mapping and deep-copying state to trigger context updates
    const updatedUserData = userData.map((employee) => {
      if (employee.firstName.toLowerCase() === assignTo.trim().toLowerCase()) {
        const updatedTasks = [...employee.tasks, newTaskObj];
        const updatedCounts = {
          ...employee.taskCounts,
          newTask: employee.taskCounts.newTask + 1,
        };
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedCounts,
        };
      }
      return employee;
    });

    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));

    // Clear state inputs
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className='bg-[#2c2c2c] p-8 rounded-lg mt-4'>
      <form onSubmit={submitHandler} className='flex flex-wrap items-start justify-between w-full'>
        <div className='w-1/2 flex flex-col gap-4 pr-10'>
          <div>
            <h3 className='text-gray-300 mb-1.5 font-semibold text-sm'>Task Title</h3>
            <input
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-500 text-white placeholder:text-gray-500 focus:border-emerald-500'
              type='text'
              placeholder='Make UI Design'
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-1.5 font-semibold text-sm'>Date</h3>
            <input
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-500 text-white placeholder:text-gray-500 focus:border-emerald-500'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-1.5 font-semibold text-sm'>Assign To</h3>
            <input
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-500 text-white placeholder:text-gray-500 focus:border-emerald-500'
              type='text'
              placeholder='Employee Name'
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-1.5 font-semibold text-sm'>Category</h3>
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-500 text-white placeholder:text-gray-500 focus:border-emerald-500'
              type='text'
              placeholder='Design, Dev, QA, etc.'
            />
          </div>
        </div>

        <div className='w-1/2 flex flex-col gap-4 pl-10'>
          <div className='flex flex-col h-full'>
            <h3 className='text-gray-300 mb-1.5 font-semibold text-sm'>Description</h3>
            <textarea
              required
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={8}
              className='text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-500 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none h-40'
              placeholder='Enter detailed task description...'
            ></textarea>
          </div>
          <button className='bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all text-white py-3 rounded text-sm font-semibold shadow-lg shadow-emerald-500/10 mt-4'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;