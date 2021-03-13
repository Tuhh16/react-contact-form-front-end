import React from 'react';
import styled from 'styled-components';

const TextAreaBase = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    overflow: hidden;
    outline: none;
    border: 1px solid #c7c4c4;
    padding: 10px;
    color: #c7c4c4;
    border-radius: 5px;
    margin-bottom: 25px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #CCC;
        opacity: 1; /* Firefox */
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export function TexArea ({ name, placeholder, ...props }) {
    return(
        <TextAreaBase name={name} placeholder={placeholder} {...props} />
    )
}
