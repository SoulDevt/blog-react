import React from "react";

function Inputs(props) {
  let inputElement = props.type;
  switch (inputElement) {
    case "input":
      inputElement = <input value={props.value} />;
      break;
    case "textarea":
      inputElement = <textarea></textarea>;
      break;
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Inputs;
