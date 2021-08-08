import { createContext, useState } from 'react';

export const UserContext = createContext({});

// ユーザー情報をGlobal Contextで管理するためのComponent
export const UserProvider = (props) => {
  const { children } = props;
  const contextName = 'Suzaki';
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
