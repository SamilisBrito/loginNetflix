import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useFetch } from "../hooks/useFetch";
import { IoMdClose } from "react-icons/io";

export function DetailsModal() {
  const { movieDetails, setIsOpen } = useContext(Context);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    getData();
    console.log("modal", data);
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
  
  return (
    <div className="fixed z-30 text-white bg-neutral-900 rounded w-11/12 xl:w-[56rem]  top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 overflow-y-auto">
      <button
        className="text-white absolute p-2  bg-neutral-900 rounded-full flex justify-center right-2 top-2 z-20"
        onClick={() => setIsOpen(false)}
      >
        <IoMdClose className="text-2xl" />
      </button>
      <div className="relative max-w-full">
        <img
          className="w-full"
          src={`
https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
        />
        <div className="absolute top-3/4 left-5 z-20">
          <p className="text-3xl font-semibold">{movieDetails?.title}</p>
          <a href="https://www.netflix.com/login">Assistir</a>
        </div>
      </div>

      <div className="p-5 mt-1 relative z-10 shadow-[0px_10px_70px_90px_rgba(23,23,23,1)]">
        <p>{movieDetails?.overview}</p>
        <p>{movieDetails?.vote_average}</p>
        <p>{new Date(movieDetails?.release_date).getFullYear()}</p>
        <div className="flex flex-wrap gap-2">
          {data?.credits?.cast.map((acting) => (
            <p key={acting.id}>{acting.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
