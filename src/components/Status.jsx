import React, { useState } from 'react';

const Status = () => {
    const [status, setStatus] = useState('o')

    return (
        <button onClick={() => setStatus('x')}>
            {status}
        </button>
    );
};

export default Status;