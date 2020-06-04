import React, { useState } from 'react';
import styled from 'styled-components'

const StatusButton = styled.button`
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: none;
    font-family: "Lucida Console", Monaco, monospace;
`

const Status = () => {

    const [status, setStatus] = useState('o')

    const handleStatus = () => {
        if (status === 'x') setStatus('o');
        if (status === 'o') setStatus('x')
    }

    return (
        <StatusButton onClick={handleStatus}>
            [{status}]
        </StatusButton>
    );
};

export default Status;