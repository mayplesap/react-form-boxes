import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/**TODO: */

function BoxList() {
  const initialState = { 
    width: 0,
    height: 0,
    backgroundColor: ""
  }
  const [formData, setFormData] = useState(initialState);
}