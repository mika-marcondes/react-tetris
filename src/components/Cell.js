import {StyledCell} from "./styles/StyledCell";
import {tetrominos} from "../tetrominos";

const Cell = ({type}) => (
    <StyledCell type={type} color={tetrominos[type].color}></StyledCell>
)

export default Cell
