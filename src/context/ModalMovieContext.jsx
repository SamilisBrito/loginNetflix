import React, { createContext, useState } from "react";

const ModalMovieContext = createContext();

function ModalMovieProvider({ children }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(false);

  function onMovieClick(movie) {
    setMovieDetails(movie);
    setIsOpen(true);
  }

  return (
    <ModalMovieContext.Provider
      value={{ query, setQuery, onMovieClick, setIsOpen, isOpen, movieDetails }}
    >
      {children}
    </ModalMovieContext.Provider>
  );
}

export { ModalMovieContext, ModalMovieProvider };
