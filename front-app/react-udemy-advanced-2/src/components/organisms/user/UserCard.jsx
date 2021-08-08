import styled from 'styled-components';
import { Card } from '../../atoms/card/card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const UserCard = memo((props) => {
  const { user } = props;
  console.log('Init UserCard.');
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  margin-bottom: 0;
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    // 折り返して文字列を表示
    overflow-wrap: break-word;
  }
`;
