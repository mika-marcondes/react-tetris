import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height},
  calc(25rem / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 4px solid #fff;
  width: 100%;
  max-width: 25rem;
  background: #111;
`
