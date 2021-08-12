import { NewBoxForm } from "./BoxList";

/**TODO:*/

function Box(props) {
  let style = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color
  }
  return (
    <div>
      <div style={style}></div>
      <button onClick={props.handleRemove}>Remove the box!</button>
    </div>
  )
}

export default Box;