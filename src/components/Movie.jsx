import { useContext } from "react";
import { Context } from "../context/Context";

export function Movie({ movie }) {
  const { onMovieClick } = useContext(Context);

  return (
    <div className="text-white mr-2 ">
      <img
      className="w-full rounded"
        src={`
https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie.title}
        onClick={() => onMovieClick(movie)}
      />
    </div>
  );
}
