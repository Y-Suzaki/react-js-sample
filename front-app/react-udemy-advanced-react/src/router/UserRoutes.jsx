// ネストしたルーティングを分割
import { UserNest } from '../components/routing/UserNest';
import { UserDetailA } from '../components/routing/UserDetailA';
import { UserDetailB } from '../components/routing/UserDetailB';

export const UserRoutes = [
  { path: '', exact: true, children: <UserNest /> },
  { path: '/detailA', exact: false, children: <UserDetailA /> },
  { path: '/detailB', exact: false, children: <UserDetailB /> },
];
