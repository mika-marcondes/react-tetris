export const stageWidth = 12
export const stageHeight = 20

// Create an Array to represent the grid
export const createStage = () => {
    return Array.from(Array(stageHeight), () =>
        new Array(stageWidth).fill([0, 'clear'])
    );
}

