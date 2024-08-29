import { useContext } from "react";
import { Context } from "../context/Context";

export function Movie({ movie }) {
  const { onMovieClick } = useContext(Context);

  return (
    <div key={movie.id} className=" text-white">
      <img
        src={`
https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie.title}
        onClick={() => onMovieClick(movie)}
      />
    </div>
  );
}
