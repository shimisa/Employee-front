import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="btn btn-sm btn-primary" onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
