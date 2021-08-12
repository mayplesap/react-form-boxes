import React, { useState } from "react";

/** Form for creating a new box to add to boxList/
 *
 * Has state for width/height/color of the box
 * sends {width, height, color} to function received from parent
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm(props) {
  const initialState = {
    width: 0,
    height: 0,
    color: "",
  };
  const [formData, setFormData] = useState(initialState);

  /** Send {width, height, color} to parent & clear form */
  function handleSubmit(evt) {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
  }

  /** Update local state with current state of input element */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add a new box</button>
    </form>
  );
}

export default NewBoxForm;
