import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const UserDetailA = () => {
  const history = useHistory();
  const backToUser = () => {
    history.push('/user');
  };

  return (
    <StyledContainer>
      <h1>Hello UserDetailA Page.</h1>
      <button onClick={backToUser}>Back</button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #392eff;
  background-color: lightcyan;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
