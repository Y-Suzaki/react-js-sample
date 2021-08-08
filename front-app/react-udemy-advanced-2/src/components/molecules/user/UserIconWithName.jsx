import { memo, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../recoil/UserState';

// eslint-disable-next-line react/display-name
export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // Global Stateの取得
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  // Recoilの取得
  const userInfoRecoil = useRecoilValue(UserState);
  console.log(
    `UserIconWithName:userInfoRecoil=${userInfoRecoil.isAdminRecoil}`,
  );

  console.log('Init UserIconWithName');

  return (
    <SContainer>
      <SImg height={180} width={240} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration-line: underline;
  color: #aaa;
  cursor: pointer;
`;
