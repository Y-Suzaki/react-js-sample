import styled from 'styled-components';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
    // history.push({ pathname: '/users', state: { isAdmin: true } });
  };

  const onClickUser = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
    // history.push({ pathname: '/users', state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>Top Page.</h2>
      <SButtonContainer>
        <SecondaryButton onClick={onClickAdmin}>Admin Console</SecondaryButton>
        <br />
        <SecondaryButton onClick={onClickUser}>
          Normal User Console
        </SecondaryButton>
      </SButtonContainer>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
