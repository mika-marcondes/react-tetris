import styled from "styled-components";
import bgImg from "../../img/bg.png"

export const StyledTetrisWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: url(${bgImg}) #000;
  background-size: cover;
`

export const StyledTetris = styled.div`
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
