import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(false);

  function onMovieClick(movie) {
    setMovieDetails(movie);
    setIsOpen(!isOpen);
  }

  return (
    <Context.Provider
      value={{ query, setQuery, onMovieClick, setIsOpen, isOpen, movieDetails }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
