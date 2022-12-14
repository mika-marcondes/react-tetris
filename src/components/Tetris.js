import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import styled from "styled-components";
import bgImg from "../img/newbg.jpg"
import {useState} from "react";
import {usePlayer} from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage";
import {useGameStatus} from "../hooks/useGameStatus";
import {useInterval} from "../hooks/useInterval";
import {createStage} from "../gameHelpers";
import {detectCollision} from "../gameHelpers";

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

    console.log('re-render')

    const movePlayer = (direction) => {
        if (!detectCollision(player, stage, {x: direction, y: 0})) {
            updatePlayerPos({x: direction, y: 0})
        }
    }

    const startGame = () => {
        // Reset grid
        setStage(createStage())
        setDropTime(1000)
        resetPlayer()
        setGameOver(false)
        setScore(0)
        setRows(0)
        setLevel(0)
    }

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1)
            // Increase speed
            setDropTime(1000 / (level + 1) + 200)
        }

        if (!detectCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log('Game Over!!!')
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
    }

    const keyUp = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
        if (!gameOver) {
            if (keyCode === 83) {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null)
        drop()
    }

    const move = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1)
            } else if (keyCode === 39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                dropPlayer()
            } else if (keyCode === 38) {
                playerRotate(stage, 1)
            }
        }
        if (!gameOver) {
            if (keyCode === 65) {
                movePlayer(-1)
            } else if (keyCode === 68) {
                movePlayer(1)
            } else if (keyCode === 83) {
                dropPlayer()
            } else if (keyCode === 87) {
                playerRotate(stage, 1)
            }
        }
    }

    useInterval(() => {
        drop()
    }, dropTime)

    return (
        <StyledTetrisWrapper role={"button"}
                             tabIndex={"0"}
                             onKeyDown={e => move(e)}
                             onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over"/>
                    ) : (
                        <div>
                            <Display text={`Score ${score}`}/>
                            <Display text={`Rows ${rows}`}/>
                            <Display text={`Level ${level}`}/>
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

const StyledTetrisWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: #78868c url(${bgImg});
  background-size: cover;
  background-blend-mode: multiply;
`

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem;
  max-width: 900px;
  margin: 0 auto;

  aside {
    width: 100%;
    max-width: 10rem;
    display: block;
    padding: 0 25px;
  }
`

export default Tetris
