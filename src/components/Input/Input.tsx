import React, { useState } from "react";

import "./Input.css";
import clear from "../../assets/clear.svg";
import eye_password from "../../assets/eye_password.svg";
import eye_password_hide from "../../assets/eye_password_hide.svg";

export interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  placeholder?: string;
  id?: string;
  name?: string;
}

export const Input = ({
  type = "text",
  clearable = false,
  placeholder,
  name,
  id
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
        id={id}
        name={name}
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
        >
          <img src={clear} alt="clear input button" />
        </button>
      )}
      {isPassword && (
        <button
          style={{ right: clearable ? 35 : 16 }}
          onClick={() => setShowPassword(!showPassword)}
          className="button visibilityButton"
        >
          {showPassword ? (
            <img src={eye_password} alt="show password" />
          ) : (
            <img src={eye_password_hide} alt="hide password" />
          )}
        </button>
      )}
    </div>
  );
};
