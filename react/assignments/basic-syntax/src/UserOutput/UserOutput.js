import React from "react";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={ props.click }>This is {props.name}'s paragraph</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};
export default userOutput;