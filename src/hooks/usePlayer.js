import {useCallback, useState} from "react";
import {tetrominos, randomTetromino} from "../tetrominos";
import {detectCollision, stageWidth} from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: tetrominos[0].shape,
        collided: false,
    })

    const rotate = (matrix, dir) => {
        // Make the rows became cols
        const rotatedTetro = matrix.map((_, index) =>
            matrix.map(col => col[index])
        )
        // Reverse each row
        if (dir > 0) return rotatedTetro.map(row => row.reverse())
        return rotatedTetro.reverse()
    }

    const playerRotate = (state, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

        const pos = clonedPlayer.pos.x
        let offset = 1

        while(detectCollision(clonedPlayer, state, {x: 0, y: 0})) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir)
                clonedPlayer.pos.x = pos
                return
            }
        }


        setPlayer(clonedPlayer)
    }

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prevState => ({
            ...prevState,
            pos: {x: (prevState.pos.x += x), y: (prevState.pos.y += y)},
            collided,
        }))
    }

    const restartPlayer = useCallback(() => {
        setPlayer({
            pos: {x: stageWidth / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, restartPlayer, playerRotate]
}
