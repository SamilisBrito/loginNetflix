import React, { useState } from "react";

export function NetflixInput({ type, label, name }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full mt-4 border border-neutral-600 rounded">
      <input
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`bg-neutral-900/60 text-white block w-full px-4 pt-5 pb-2 text-lg outline-none transition-all${
          isFocused || inputValue ? "border-blue-500" : "border-gray-400"
        }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-3 text-lg text-neutral-400 transition-all transform ${
          isFocused || inputValue
            ? "-translate-y-2 text-sm"
            : "translate-y-0"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
