import { useParams, useNavigate } from 'react-router-dom';
import { Taskcontext } from '../context/Context';
import { useContext } from 'react';

function EditTaskComponent({setEditText, editText }) {
  const { tasks, setTasks } = useContext(Taskcontext);
  
  const { index } = useParams(); 
  const navigate = useNavigate(); 

  const taskIndex = parseInt(index);

  const updateTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = editText;
    setTasks(newTasks);
  };
  
  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Edit Task</h2>
      
      <input
        value={editText}
        onChange={(e) => setEditText(e.target.value)} 
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          updateTask(taskIndex); 
          navigate('/'); 
        }
      }}
        className="w-3/4 px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        placeholder="Edit your task here"
        
      />

      <button
        onClick={() => {
          updateTask(taskIndex); 
          navigate('/');
          
        }}
        className="px-6 py-2 text-lg font-medium text-white bg-gray-500 rounded-md shadow hover:bg-gray-600 transition-all"
      >
        Update Task
      </button>
    </div>
  );
}

export default EditTaskComponent;
