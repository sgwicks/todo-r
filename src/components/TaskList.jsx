import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Task from './Task'
import StatusButton from './StatusButton'

const List = styled.ul`
  list-style-type: none;
`

const TaskList = ({ list }) => {
  const [taskList, setTaskList] = useState([])
  const [input, setInput] = useState('Add a new task...')

  useEffect(() => {
    setTaskList(list.tasks)
  }, [list])

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
      <h2>{list.name}</h2>
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