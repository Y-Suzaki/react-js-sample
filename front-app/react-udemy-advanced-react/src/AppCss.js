import './App.css';
import {useState, useCallback, useMemo} from "react";
import {ChildArea} from "./components/ChildArea";
import {InlineStyle} from "./components/css/InlineStyle";
import {CssModule} from "./components/css/CssModule";
import {StyledJsx} from "./components/css/StyledJsx";
import {StyledComponents} from "./components/css/StyledComponents";
import {Emotion} from "./components/css/Emotion";

function AppCss() {
  console.log('Rendering App')
  // eslint-disable-next-line no-unused-vars
  const [name, setName]= useState('tanaka')
  const [open, setOpen] = useState(false)
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeOpen = () => {
    setOpen(!open)
  }
  // eslint-disable-next-line no-unused-vars
  const plusButton = () => {
    setName(name + '@')
  }

  // 【セクション3 再レンダリングの最適化】
  // useCallback（関数のmemo化）がない状態で子コンポーネントに関数を渡してしまうと、アロー関数は毎回新しいオブジェクトを生成するため、
  // propsに毎回変更があったと判断され、再レンダリングが起こってしまう。
  const closeButton = useCallback(() => {
    setOpen(false)
  }, [])

  // 【セクション3 再レンダリングの最適化】
  // 変数のmemo化。Componentのmemo化とは違う。
  const title = useMemo(() => "Hello Code SandBox.", [])

  return (
    <div className="App">
      <h1>{title}</h1>
      <InlineStyle />
      <CssModule/>
      <StyledJsx/>
      <StyledComponents/>
      <Emotion/>

      <br/>
      <input value={name} onChange={changeName} />
      <br/>
      <br/>
      <button onClick={changeOpen}>表示</button>
      <ChildArea open={open} closeButton={closeButton}/>
    </div>
  );
}

export default AppCss;
