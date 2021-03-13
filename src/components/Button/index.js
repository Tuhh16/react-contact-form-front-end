import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    background: #3786bd;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;

export function Button ({ type, value, ...props }) {
    return (
        <ButtonBase
            type={type}
            value={value}
            {...props}
        />
    )
}