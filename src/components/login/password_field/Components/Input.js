import React from "react";

export default ({ type, value, onChange, inputWidth }) => (
  <div style={{ width: "100%" }}>
    <input
      id={"input"}
      type={type}
      value={value}
      onChange={onChange}
      style={{ width: inputWidth }}
    />
  </div>
);
