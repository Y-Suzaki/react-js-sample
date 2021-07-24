import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

export const UserDetailB = () => {
  {
    /* 画面遷移時、任意のStateを別コンポーネントに渡すことができる。 */
  }
  const history = useHistory();
  const { state } = useLocation();
  const backToUser = () => {
    history.push('/user');
  };

  return (
    <StyledContainer>
      <h1>Hello UserDetailB Page.</h1>
      <button onClick={backToUser}>Back</button>
      {state.map((department) => (
        <p key={department}>{department}</p>
      ))}
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
