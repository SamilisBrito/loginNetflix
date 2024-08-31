import { useEffect } from "react";
import { Movie } from "../../components/ImageMovie";
import { useFetch } from "../../hooks/useFetch";
import { useModalMovie } from "../../hooks/useModalMovie";

export function Search() {
  const { query, isOpen } = useModalMovie();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    getData();
  }, [query]);

  async function getData() {
    if (query !== "")
      await request(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
          },
        }
      );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
      {data?.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
