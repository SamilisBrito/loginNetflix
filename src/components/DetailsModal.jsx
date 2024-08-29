import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useFetch } from "../hooks/useFetch";

export function DetailsModal() {
  const { movieDetails } = useContext(Context);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await request(
      `https://api.themoviedb.org/3/movie/${movieDetails.id}?append_to_response=credits`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }
  //sinopse, avaliação, data de lançamento e elenco
  console.log("modal", data);
  return (
    <div className="fixed z-30 text-white bg-neutral-900 rounded w-11/12 xl:w-[56rem]  top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 overflow-y-auto">
      <figure className="max-w-full">
        <img
          className="w-full"
          src={`
https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
        />
      </figure>
      <div className="p-5">
        <p>{movieDetails?.overview}</p>
        <p>{movieDetails?.vote_average}</p>
        <p>{new Date(movieDetails?.release_date).getFullYear()}</p>
        <div  className="flex flex-wrap gap-2">
          {data?.credits?.cast.map((acting) => (
            <p key={acting.id}>{acting.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
