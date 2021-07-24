import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Page404 = () => {
  return (
    <StyledContainer>
      <h1>404 NotFound</h1>
      <Link to="/">Home</Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #ff0000;
  background-color: white;
  color: red;
  border-radius: 20px;
  padding: 16px;
  margin: 16px;
`;
