import React from "react";
import { LiaTimesCircle } from "react-icons/lia";

export function NetflixInput({ type, label, name, register, errorMessage }) {
  return (
    <fieldset>
      <div className="relative w-full border border-neutral-600 rounded group focus-within:border-blue-200">
        <input
          type={type}
          id={name}
          name={name}
          placeholder=" "
          className={`bg-neutral-900/60 text-white block w-full px-4 pt-5 pb-2 text-lg outline-none transition-all peer/input`}
          {...register}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 top-3 text-sm text-neutral-400 transition-all transform  peer-placeholder-shown/input:translate-y-0 group-focus-within:!-translate-y-2 -translate-y-2 
            peer-placeholder-shown/input:text-lg group-focus-within:!text-sm
            `}
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <p className="text-red-500 flex gap-1 pt-1">
          {" "}
          <LiaTimesCircle />
          <span className="text-xs">{errorMessage}</span>
        </p>
      )}
    </fieldset>
  );
}
