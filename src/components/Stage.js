import Cell from "./Cell";
import {StyledStage} from "./styles/StyledStage";

// Map through the stage prop to get the row array, which holds the cells
// each cell renders the Cell component
const Stage = ({stage}) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
)

export default Stage
