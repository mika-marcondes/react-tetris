import {useState} from "react";
import {randomShape} from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: randomShape().shape,
        collided: false,
    })
    return [player]
}
