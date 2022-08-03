import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import styled from "styled-components";
import bgImg from "../img/newbg.jpg"
import {useState} from "react";
import {usePlayer} from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage";
import {createStage} from "../gameHelpers";

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')

    const movePlayer = (direction) => {
        updatePlayerPos({x: direction, y: 0})
    }

    const startGame = () => {
        // Reset grid
        setStage(createStage())
        resetPlayer()
    }

    const drop = () => {
        updatePlayerPos({x: 0, y: 1, collided: false})
    }

    const dropPlayer = () => {
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
            }
        }
        if (!gameOver) {
            if (keyCode === 65) {
                movePlayer(-1)
            } else if (keyCode === 68) {
                movePlayer(1)
            } else if (keyCode === 83) {
                dropPlayer()
            }
        }
    }

    return (
        <StyledTetrisWrapper role={"button"} tabIndex={"0"} onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over"/>
                    ) : (
                        <div>
                            <Display text="Score"/>
                            <Display text="Rows"/>
                            <Display text="Level"/>
                        </div>
                    )}
                    <StartButton onClick={startGame}/>
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
