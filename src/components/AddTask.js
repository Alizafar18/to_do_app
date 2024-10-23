import React from 'react';
import { useContext } from 'react';
import { Taskcontext } from '../context/Context';
import { useState } from 'react';

function AddTask() {
  const { tasks, setTasks} = useContext(Taskcontext);
  const [inputValue, setInputValue] = useState('');
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  return (
    <div className="mt-12 text-left">
      
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-center">Add Task</h1>
      </div>

      <div className="flex justify-center items-center">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new task"
          className="px-4 py-2 text-lg border border-gray-300 rounded-md shadow-sm w-4/5"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask(e);
            }
          }}
        />
        <button
          onClick={addTask}
          className="ml-4 px-5 py-2 bg-gray-500 text-white font-semibold text-lg rounded-md shadow-sm hover:bg-blue-600 transition-all"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
