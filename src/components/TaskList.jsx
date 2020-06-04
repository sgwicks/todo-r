import React, {useState} from 'react';
import styled from 'styled-components'
import Task from './Task'
import StatusButton from './StatusButton'

const List = styled.ul`
  list-style-type: none;
`

const TaskList = ({listName}) => {
    const [taskList, setTaskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])
    const [input, setInput] = useState('Add a new task...')

    const addTask = (event) => {
        event.preventDefault();
        setTaskList([...taskList, input])
        setInput('')
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
        <h2>{listName}</h2>
        <List>
          {taskList.map((task, i) => <Task status='done' key={'task' + i}>{task}</Task>)}
        <form onSubmit={addTask}>
            <StatusButton>[+]</StatusButton>
            <label><input onClick={() => setInput('')} onChange={handleInput} value={input} /></label>
        </form>
        </List>
      </>
    );
};

export default TaskList;