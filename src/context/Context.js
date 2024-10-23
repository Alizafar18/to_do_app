import { createContext, useState } from "react";


export const Taskcontext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); 
 
  return (
    <Taskcontext.Provider value={{ tasks, setTasks }}>  
      {children}  
    </Taskcontext.Provider>
  );
};
