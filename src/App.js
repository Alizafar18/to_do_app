import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/Footer';
import EditTaskComponent from './components/EditTaskComponent';
import { TaskProvider } from './context/Context';
import { useState } from 'react';

function App() {
  const [editText, setEditText] = useState('');
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <div className="flex flex-1">
         
          <nav className="w-64 bg-gray-800 text-white p-4 flex flex-col items-center">
            <Link
              to="/"
              className="w-full py-2 mb-4 text-center text-lg font-semibold  rounded hover:bg-gray-700 transition"
            >
              View Tasks
            </Link>
            <Link
              to="/add-task"
              className="w-full py-2 text-center text-lg font-semibold rounded hover:bg-gray-700 transition"
            >
              Add Task
            </Link>
          </nav>

          
          <div className="flex-grow p-6">
            <TaskProvider>
              <Routes>
                <Route path="/" element={<TaskList setEditText={setEditText} />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/edit-task/:index" element={<EditTaskComponent editText={editText} setEditText={setEditText} />} />
              </Routes>
            </TaskProvider>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
