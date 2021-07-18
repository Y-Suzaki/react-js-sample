/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from "@emotion/react"
import styled from "@emotion/styled"

// yarn add @emotion/react @emotion/styled
export const Emotion = () => {
  // cssの書き方
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center
  `

  // jsオブジェクトでの書き方（= Inline Styleと同じ）
  const titleStyle = css(
    {
      margin: "0px",
      color: "#3d84a8"
    }
  )

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Hello Emotion --</p>
      <ButtonStyle>Fight</ButtonStyle>
    </div>
  )
}

// StyledComponentsと同じ書き方
const ButtonStyle = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  // StyledComponentsと組み合わせて使うと、scssをそのまま設定できる。
  &:hover {
    background-color: deepskyblue;
    color: #fff;
    cursor: pointer;
  }
`