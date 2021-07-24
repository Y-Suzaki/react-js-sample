import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';

// パスパラメータの受取は、useParams(Hooks)で行う。
// クエリパラメータの受取は、useLocation(Hooks)で行う。
export const UserParams = () => {
  const { id } = useParams();
  const { search } = useLocation();
  // クエリパラメータはそのままだと扱いにくいので、お便利クラス（URLSearchParams）を試用する。
  const query = new URLSearchParams(search);
  const department = query.get('department');

  return (
    <StyledContainer>
      <h1>User Path & Query Parameter List</h1>
      <p>User ID: {id}</p>
      {/* 部門パラメータの有無で表示を出し分け */}
      {department && <p>{department} department.</p>}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #ffaabb;
  border-radius: 20px;
  padding: 16px;
  margin: 16px;
  //display: flex;
  justify-content: space-around;
  align-items: center;
`;
