import '../../App.css';
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './types/InlineStyle';
import { CssModule } from './types/CssModule';
import { StyledJsx } from './types/StyledJsx';
import { StyledComponents } from './types/StyledComponents';
import { Emotion } from './types/Emotion';

function AppCss() {
  console.log('Rendering App');
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('tanaka');
  const [open, setOpen] = useState(false);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeOpen = () => {
    setOpen(!open);
  };
  // eslint-disable-next-line no-unused-vars
  const plusButton = () => {
    setName(name + '@');
  };

  // 【セクション3 再レンダリングの最適化】
  // useCallback（関数のmemo化）がない状態で子コンポーネントに関数を渡してしまうと、アロー関数は毎回新しいオブジェクトを生成するため、
  // propsに毎回変更があったと判断され、再レンダリングが起こってしまう。
  const closeButton = useCallback(() => {
    setOpen(false);
  }, []);

  // 【セクション3 再レンダリングの最適化】
  // 変数のmemo化。Componentのmemo化とは違う。
  const title = useMemo(() => 'Hello App CSS.', []);

  return (
    <div className="App">
      <h1>{title}</h1>
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponents />
      <Emotion />

      <br />
      <input value={name} onChange={changeName} />
      <br />
      <br />
      <button onClick={changeOpen}>表示</button>
      <ChildArea open={open} closeButton={closeButton} />
    </div>
  );
}

export default AppCss;
