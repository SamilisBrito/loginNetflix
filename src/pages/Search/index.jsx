import { useEffect } from "react";
import { Content } from "../../components/content";
import { Movie } from "../../components/ImageMovie";
import { useFetch } from "../../hooks/useFetch";
import { useModalMovie } from "../../hooks/useModalMovie";

export function Search() {
  const { query } = useModalMovie();
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

  // console.log();
  return data?.results.length ? (
    <Content
      error={error}
      loading={loading}
      data={data}
      renderContent={(data) => (
        <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data?.results.map((movie) => (
            <Movie key={movie.id} movie={movie} width={"w-full"}/>
          ))}
        </div>
      )}
      errorMessage={"Erro ao carregar"}
    />
  ) : (
    <div className="h-[80vh] flex items-center justify-center">
      <p className="text-neutral-400">Resultado não encontrado</p>
    </div>
  );
}
