import React, {useState} from 'react';
import styled from 'styled-components'
import Task from './Task'
import StatusButton from './StatusButton'

const List = styled.ul`
  list-style-type: none;
`

const TaskList = ({listName}) => {
    const [taskList, setTaskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])

    const addTask = () => {
        setTaskList([...taskList, 'Puzzles'])
    }

    return (
        <>
        <h2>{listName}</h2>
        <List>
          {taskList.map((task, i) => <Task status='done' key={'task' + i}>{task}</Task>)}
            <StatusButton onClick={addTask}>[+]</StatusButton>
        </List>
      </>
    );
};

export default TaskList;