import React, { useState } from 'react';
import StatusButton from './StatusButton'


const Status = () => {

    const [status, setStatus] = useState('o');
    const [showOptions, toggleShowOptions] = useState(false)

    const handleStatus = () => {
        toggleShowOptions(!showOptions)
    }

    const pickStatus = (option) => {
        setStatus(option);
        toggleShowOptions(false);
    }

    const options = ['o', 'x', '/', '*', '>'];

    return (
        <>
        <StatusButton onClick={handleStatus}>
            [{status}]
        </StatusButton>
        {showOptions && options
        .map((option) => {
            return <StatusButton key={option} onClick={() => pickStatus(option)}>{option}</StatusButton>
        })
        }
        </>
    );
};

export default Status;