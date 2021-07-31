import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 自作Componentにcssを足すときは、styled(Component)で記述する。
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
