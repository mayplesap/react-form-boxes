import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/**
 * Manages boxes in the list.
 *
 * State: array of objects with box data [{height, width, color, id}, ...]
 *
 * App -> BoxList -> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  function handleRemove(boxId) {
    setBoxes((boxes) => boxes.filter((box) => box.id !== boxId));
  }

  return (
    <div className="Boxlist">
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          height={box.height}
          width={box.width}
          color={box.color}
          key={box.id}
          id={box.id}
          handleRemove={() => handleRemove(box.id)}
        />
      ))}
    </div>
  );
}

export default BoxList;
