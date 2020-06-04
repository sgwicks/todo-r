import React, { useState } from 'react';
import './App.css';
import Task from './components/Task'

function App() {
  const [taskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])

  return (
    <div className="App">
      <h1>Chores</h1>
      <ul>
        {taskList.map((task, i) => <Task key={'task' + i} task={task} />)}
        <li>Final task</li>
      </ul>
    </div>
  );
}

export default App;
