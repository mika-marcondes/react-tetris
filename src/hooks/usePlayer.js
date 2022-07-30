import {useCallback, useState} from "react";
import {randomTetromino} from "../tetrominos";
import {stageWidth} from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: randomTetromino().shape,
        collided: false,
    })

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {
        // noinspection JSCheckFunctionSignatures
        setPlayer({
            pos: {x: stageWidth / 2 - 2},
            shape: randomTetromino.shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer]
}
