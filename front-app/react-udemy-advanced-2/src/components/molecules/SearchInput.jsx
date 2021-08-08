import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/input';
import { memo } from 'react';

// Propsに変更がない場合は、再レンダリング不要。-> memo
// eslint-disable-next-line react/display-name
export const SearchInput = memo(() => {
  console.log('Init SearchInput.');
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

// コンポーネント全体を横並びにするためのコンテナ
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// テキストボックスとボタンに余白を設定する枠
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
