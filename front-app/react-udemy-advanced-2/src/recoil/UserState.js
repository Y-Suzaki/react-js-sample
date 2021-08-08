import { atom } from 'recoil';
export const UserState = atom({
  key: 'UserState',
  default: { isAdminRecoil: false },
});
