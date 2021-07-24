import styled from "styled-components";

export const Home = () => {
  return (
    <StyledContainer>
      <h1>Hello Home Page.</h1>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border: solid 2px #77bb55;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center
`