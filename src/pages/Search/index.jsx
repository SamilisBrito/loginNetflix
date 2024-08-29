import { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Context } from "../../context/Context";
import { Movie } from "../../components/Movie";
import { DetailsModal } from "../../components/DetailsModal";

export function Search() {
  const { query, isOpen } = useContext(Context);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    getData();
  }, [query]);

  async function getData() {
    if (query !== "")
      await request(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
          },
        }
      );
  }

  return (
    <div className="flex flex-wrap gap-5">
      {data?.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      {isOpen && <DetailsModal/>}
    </div>
  );
}
