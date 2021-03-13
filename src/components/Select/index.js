import React from "react";
import styled from "styled-components";

const SelectBase = styled.select`
  width: 100%;
  border: 1px solid #c7c4c4;
  padding: 10px;
  color: #c7c4c4;
  border-radius: 5px;
  margin-bottom: 25px;
  option {
    color: #c7c4c4;
  }
  &:focus {
    outline: none;
    border: 1px solid #000;
 }
`;

export function Select ({ name, children, ...props }) {
    return (
        <SelectBase name={name} {...props}>
            {children}
        </SelectBase>
    )
}

export function Option ({ value, name, ...props }) {
    return(
        <option value={value} {...props}>{name}</option>
    )
}