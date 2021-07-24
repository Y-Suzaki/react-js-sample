import classes from "./CssModule.module.scss"

// SCSSを使うので、yarn add node-scss:5.0.0
export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>-- Hello CSS Module --</p>
      <button className={classes.button}>Fight</button>
    </div>
  )
}