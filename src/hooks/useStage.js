import {useState, useEffect} from "react";
import {createStage} from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())

    useEffect(() => {
        const updateStage = prev => {
            // Clear the stage
            const newStage = prev.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            )

            // Draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })
            return newStage
        }

        setStage(prevState => updateStage(prevState))

    }, [player])

    return [stage, setStage]
}
