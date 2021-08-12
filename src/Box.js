/** Renders a box
 *
 * Props:
 * - width, number
 * - height, number
 * - color, string
 * - value, UUID
 *
 * BoxList -> Box
 */

function Box(props) {
  let style = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: props.color,
  };

  function removeBox(evt) {
    props.handleRemove();
  }

  return (
    <div className="Box">
      <div style={style}></div>
      <button onClick={removeBox}>Remove the box!</button>
    </div>
  );
}

export default Box;
