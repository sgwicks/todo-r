import React, {useState} from 'react';
import styled from 'styled-components'
import Task from './Task'

const List = styled.ul`
  list-style-type: none;
`

const TaskList = () => {
    const [taskList] = useState(['Sweep \'til the floor\'s all clean', 'Polish and wax', 'Do laundry', 'Mop and shine up'])

    return (
        <List>
        {taskList.map((task, i) => <Task status='done' key={'task' + i}>{task}</Task>)}
      </List>
    );
};

export default TaskList;