import React, { useState } from 'react';
import './App.css';
import Task from './components/Task'
import Status from './components/Status';

function App() {
  const [taskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])

  return (
    <div className="App">
      <h1>Chores</h1>
      <ul>
  {taskList.map((task, i) => <Task status='done' key={'task' + i}>{task}</Task>)}
        <li>Sample generic li</li>
      </ul>
      <Status />
    </div>
  );
}

export default App;
