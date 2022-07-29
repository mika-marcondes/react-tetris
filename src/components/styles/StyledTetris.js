import styled from "styled-components";
import bgImg from "../../img/newbg.jpg"

export const StyledTetrisWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: #78868c url(${bgImg});
  background-size: cover;
  background-blend-mode: multiply;
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
