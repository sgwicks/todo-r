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

    const [status, setStatus] = useState('o');
    const [showOptions, toggleShowOptions] = useState(false)

    const handleStatus = () => {
        toggleShowOptions(!showOptions)
    }

    return (
        <>
        <StatusButton onClick={handleStatus}>
            [{status}]
        </StatusButton>
        {showOptions && [
            <StatusButton onClick={() => setStatus('o')}>o</StatusButton>,
            <StatusButton onClick={() => setStatus('x')}>x</StatusButton>,
            <StatusButton onClick={() => setStatus('/')}>/</StatusButton>,
            <StatusButton onClick={() => setStatus('*')}>*</StatusButton>,
            <StatusButton onClick={() => setStatus('>')}>></StatusButton>
            ]}
        </>
    );
};

export default Status;