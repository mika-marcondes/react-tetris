import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height},
  calc(18rem / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #939393;
  width: 100%;
  max-width: 18rem;
  background: #111;
`
