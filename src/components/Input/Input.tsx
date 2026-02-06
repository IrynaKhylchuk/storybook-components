import React, { useState } from "react";

import "./Input.css";

export interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  clearable = false,
  placeholder
}: InputProps) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  let inputType;

  if (isPassword && showPassword) {
    inputType = "text";
  } else if (isPassword && !showPassword) {
    inputType = "password";
  } else {
    inputType = type;
  }

  return (
    <div className="inputContainer">
      <input
        className="input"
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {clearable && (
        <button
          className="button clearButton"
          onClick={() => setValue("")}
          disabled={!value}
        >
          X
        </button>
      )}
      {isPassword && (
        <button
          style={{ right: clearable ? 35 : 16 }}
          onClick={() => setShowPassword(!showPassword)}
          className="button visibilityButton"
        >
          👁
        </button>
      )}
    </div>
  );
};
