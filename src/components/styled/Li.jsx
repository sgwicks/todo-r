import styled from 'styled-components';

const Li = styled.li`
    list-style-type: ${props => {
        switch(props.status) {
            case 'done': return 'square';
            case 'doing': return 'decimal';
            default: return 'round';
        }
    }}
`

export default Li;
