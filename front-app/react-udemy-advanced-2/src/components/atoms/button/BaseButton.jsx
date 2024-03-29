import styled from 'styled-components';

// ボタンの共通cssを定義
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 20px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
