import styled from "styled-components";

const StartButton = ({callback}) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

const StyledStartButton = styled.button`
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border: 4px solid rgba(84, 84, 84, 0.8);
  border-right-color: rgba(37, 36, 36, 0.8);
  border-bottom-color: rgba(37, 36, 36, 0.8);
  color: white;
  background: rgb(63, 63, 63);
  font-family: Pixel, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`

export default StartButton
