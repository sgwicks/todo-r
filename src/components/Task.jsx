import React from 'react';
import styled from 'styled-components';

const Task = ({className, children}) => <li className={className}>{children}</li>

const StyledTask = styled(Task)`
    list-style-type: ${props => {
        switch(props.status) {
            case 'done': return 'square';
            case 'doing': return 'decimal';
            default: return 'round';
        }
    }};
`

export default StyledTask;