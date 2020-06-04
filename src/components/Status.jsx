import React, { useState } from 'react';
import styled from 'styled-components'

const statusButton = styled.button`

`

const Status = () => {
    const [status, setStatus] = useState('o')

    const handleStatus = () => {
        if (status === 'x') setStatus('o');
        if (status === 'o') setStatus('x')
    }

    return (
        <statusButton onClick={handleStatus}>
            [{status}]
        </statusButton>
    );
};

export default Status;