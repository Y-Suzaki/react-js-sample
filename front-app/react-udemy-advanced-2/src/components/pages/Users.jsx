import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { UserContext } from '../../providers/UserProvider';
import { UserState } from '../../recoil/UserState';

// ダミーデータのお便利作成方法
const users = [...Array(10).keys()].map((x) => {
  return {
    id: x,
    name: `Tanaka - ${x}`,
    email: 'tanaka@gmail.com',
    phone: '0120-111-111',
    company: {
      name: 'React Sample ltd',
    },
    website: 'https://react-sample.co.jp',
    image: 'https://source.unsplash.com/TcByXvrIrno',
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  // RecoilからStateの取得
  const [userInfoRecoil, setUserInfoRecoil] = useRecoilState(UserState);
  console.log(`userInfoRecoil=${userInfoRecoil.isAdminRecoil}`);

  // Global ContextからStateの取得
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickChange = () => {
    // Global Context
    const isNewAdmin = userInfo ? !userInfo.isAdmin : false;
    console.log(isNewAdmin);
    setUserInfo({ isAdmin: isNewAdmin });

    // Recoil
    const isNewAdminRecoil = userInfoRecoil
      ? !userInfoRecoil.isAdminRecoil
      : false;
    setUserInfoRecoil({ isAdminRecoil: isNewAdminRecoil });
  };

  return (
    <SContainer>
      <h2>Users Page.</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickChange}>Change</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  // 各コンポーネントを中央寄せの、立て並びにしたい
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
