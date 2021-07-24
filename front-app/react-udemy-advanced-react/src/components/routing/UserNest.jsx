import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNest = () => {
  const allDepartment = ['account', 'invent', 'hr'];
  return (
    <StyledContainer>
      <h1>Hello User Page.</h1>
      <Link to="/user/detailA">Detail A</Link>
      {/* 画面遷移時、任意のStateを別コンポーネントに渡すことができる。 */}
      <Link to={{ pathname: '/user/detailB', state: allDepartment }}>
        Detail B
      </Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #ffaabb;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
