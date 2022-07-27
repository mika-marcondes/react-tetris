import Cell from "./Cell";

// Map through the stage prop to get the row array, which holds the cells
// each cell renders the Cell component
const Stage = ({stage}) => (
    <div>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </div>
)

export default Stage
