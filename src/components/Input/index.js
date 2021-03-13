import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
    border: 1px solid #c7c4c4;
    padding: 10px;
    width: 100%;
    color: #c7c4c4;
    border-radius: 5px;
    margin-bottom: 25px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #CCC;
        opacity: 1; /* Firefox */
    }
    &:focus {
        outline: none;
        border: 1px solid #000;
    }
`;

export function Input ({ onChange, placeholder, ...props }) {
    return (
        <>
            <InputBase
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </>
    )
}