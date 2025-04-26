import React, { useState } from 'react'
import './App.css';
export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const AddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  }

  const RemoveTask = (indexToRemove) => {
    setTaskList(taskList.filter((task, index) => index !== indexToRemove));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text"
        placeholder="enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      
      <button onClick={AddTask}>AddTask</button>

      <div className="display">
        <ul>
          {
            taskList.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => RemoveTask(index)}>delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
