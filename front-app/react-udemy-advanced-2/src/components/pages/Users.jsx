import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

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
  return (
    <SContainer>
      <h2>Users Page.</h2>
      <SearchInput />
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
