import { Header } from '../atoms/layout/Header';

export const HeaderOnly = (props) => {
  const { children } = props;
  const style = {
    height: '50px',
    backgroundColor: 'red',
  };
  return (
    <>
      <Header />
      {children}
    </>
  );
};
