import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <Context.Provider value={{ query, setQuery }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };

