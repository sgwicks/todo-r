import React from 'react';
import styled from 'styled-components';
import Status from './Status'

const task = ({className, children}) => <li className={className}><Status /> {children}</li>

const Task = styled(task)`
    /*
    list-style-type: ${props => {
        switch(props.status) {
            case 'done': return 'square';
            case 'doing': return 'decimal';
            default: return 'round';
        }
    }};
    */
`

export default Task;