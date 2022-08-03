import {useCallback, useState} from "react";
import {tetrominos, randomTetromino} from "../tetrominos";
import {stageWidth} from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: tetrominos[0].shape,
        collided: false,
    })

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prevState => ({
            ...prevState,
            pos: {x: (prevState.pos.x += x), y: (prevState.pos.y += y)},
            collided,
        }))
    }

    const restartPlayer = useCallback(() => {
        setPlayer({
            pos: { x: stageWidth / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, restartPlayer]
}
