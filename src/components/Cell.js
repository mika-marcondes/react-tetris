import {StyledCell} from "./styles/StyledCell";
import {tetrominos} from "../tetrominos";

const Cell = ({type}) => (
    <StyledCell type={"L"} color={tetrominos["L"].color}></StyledCell>
)

export default Cell
