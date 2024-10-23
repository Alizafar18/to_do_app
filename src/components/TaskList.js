import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Taskcontext } from '../context/Context';

function TaskList({ setEditText }) {
  const { tasks, setTasks } = useContext(Taskcontext);

  
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditText(tasks[index].text);
  };

  return (
    <div className="mt-12 mx-auto w-full max-w-4xl">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold">Task List</h1>
      </div>

      <ul className="list-none space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`p-4 rounded-lg shadow-md flex justify-between items-center bg-gray-100 transition-all ${
              task.completed ? 'bg-gray-200' : ''
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)} 
                className="mr-4 size-5"
              />
              <span
                className={`cursor-pointer text-lg ${
                  task.completed ? 'text-gray-500' : 'text-black'
                }`}
              >
                {task.text}
              </span>
            </div>

           
            <div className="flex space-x-4">
              <Link to={`/edit-task/${index}`}>
                <button
                  onClick={() => startEditing(index)}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all"
                >
                  Edit
                </button>
              </Link>

              
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all"
                >
                  Delete
                </button>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
