import styled from 'styled-components';

export const Footer = () => {
  return <SHooter>&copy; 2021 Test.Inc</SHooter>;
};

const SHooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  // 最下部の固定位置に表示
  position: fixed;
  bottom: 0;
  width: 100%;
`;
