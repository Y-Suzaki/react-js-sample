import {memo} from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "LightBlue"
}

// 【セクション3 再レンダリングの最適化】
// memo（Componentのmemo化）を使うことで、再レンダリングを避けることができる。
// eslint-disable-next-line react/display-name
export const ChildArea = memo((props) => {
  // eslint-disable-next-line react/prop-types
  const {open, closeButton} = props
  console.log('Rendering ChildArea')
  const data = [...Array(2000).keys()]
  data.forEach((x) => console.log(x))

  return (
    <>
    {
      open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={closeButton}>閉じる</button>
        </div>
      ) : null
    }
    </>

  )
})