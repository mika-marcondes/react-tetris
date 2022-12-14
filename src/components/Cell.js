import {tetrominos} from "../tetrominos";
import styled from "styled-components"
import React from "react";

const Cell = ({type}) => (
    <StyledCell type={type} color={tetrominos[type].color}></StyledCell>
)

const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.2);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`

export default React.memo(Cell)
