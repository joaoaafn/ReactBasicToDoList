import React, { useState } from "react";
import './App.css';
import {v4 as uuidv4} from 'uuid';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  //const message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      tittle: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      tittle: 'Ler Livros',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {... task, completed: !task.completed }
        return task;
      });
      setTasks(newTasks);
  };

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [... tasks, {
        tittle: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return(
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}  />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>;
    </>
  );
};

export default App;