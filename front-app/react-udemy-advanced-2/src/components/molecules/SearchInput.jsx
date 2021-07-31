import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/input';

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

// コンポーネント全体を横並びにするためのコンテナ
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// テキストボックスとボタンに余白を設定する枠
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
