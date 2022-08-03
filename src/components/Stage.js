import Cell from "./Cell";
import styled from "styled-components";

// Map through the stage prop to get the row array, which holds the cells
// each cell renders the Cell component
const Stage = ({stage}) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
)

const StyledStage = styled.div`
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

export default Stage
