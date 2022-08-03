export const stageWidth = 12
export const stageHeight = 20

// Create an Array to represent the grid
export const createStage = () => {
    return Array.from(Array(stageHeight), () =>
        new Array(stageWidth).fill([0, 'clear'])
    );
}

export const detectCollision = (player, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1) {
            // 1. Check we're on a Tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // 2. Check if our move is inside the game height
                    !stage[y + player.pos.y + moveY] ||
                    // 3. Check if our move is inside the game width
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell we're moving isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
                    'clear'
                ) {
                    return true
                }
            }
        }
    }
}
