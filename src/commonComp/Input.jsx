import React from "react";

export default function Input({ onChange, name, value, placeholder }) {
  return (
    <input className="input"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}
