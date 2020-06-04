import React from 'react';
import Li from './styled/Li'

const Task = ({task}) => {
    return (
    <Li status="done">{task}</Li>
    );
};

export default Task;