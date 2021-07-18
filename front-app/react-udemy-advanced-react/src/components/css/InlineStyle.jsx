// 【セクション4 css Inline Style】
export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",  // コンポーネントを並列で配置
    justifyContent: "space-around",  // フレキシブルボックスの中で等間隔で配置
    alignItems: "center"  // 中央配置
  }
  const titleStyle = {
    margin: "0px",
    color: "#3d84a8"
  }
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  }

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-- Hello Inline Style --</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  )
}