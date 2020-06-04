import React, { useState } from 'react';
import styled from 'styled-components'
import Task from './components/Task'

const TaskList = styled.ul`
  list-style-type: none;
`

function App() {
  const [taskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])

  return (
    <div className="App">
      <h1>Chores</h1>
      <TaskList>
        {taskList.map((task, i) => <Task status='done' key={'task' + i}>{task}</Task>)}
      </TaskList>
    </div>
  );
}

export default App;
