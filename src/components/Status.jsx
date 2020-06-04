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

    const pickStatus = () => {

    }

    const options = ['o', 'x', '/', '*', '>'];

    return (
        <>
        <StatusButton onClick={handleStatus}>
            [{status}]
        </StatusButton>
        {showOptions && options
        .map(option => {
            return <StatusButton onClick={() => setStatus(option)}>{option}</StatusButton>
        })
        }
        </>
    );
};

export default Status;