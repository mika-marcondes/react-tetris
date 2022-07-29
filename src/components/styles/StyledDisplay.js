import styled from "styled-components";

export const StyledDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 3px solid #fff;
  min-height: 30px;
  width: 100%;
  color: ${props => (props.gameOver ? 'red' : 'white')};
  background: black;
  font-family: Pixel, sans-serif;
`
