import { useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Context } from "../context/Context";

export function Header() {
  const { query, setQuery } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (query !== "") {
      navigate("/home/search");
    } else {
      navigate("/home");
    }
  }, [query, navigate]);

  return (
    <header className="h-16 flex items-center bg-gradient-to-b from-black from-0% via-black/40 via-100% to-black justify-between">
      <img className="max-w-24" src={logo} alt="Netflix logo" />

      <form
        className="bg-red-700 p-[0.125rem] flex items-center gap-3 border border-transparent focus-within:border-white text-white"
        role="search"
      >
        <FiSearch />

        <label className="sr-only" htmlFor="input-search-id">
          Procurar filmes
        </label>
        <input
          className="bg-transparent border border-transparent focus:outline-none"
          id="input-search-id"
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Titulo"
        />
      </form>
    </header>
  );
}
