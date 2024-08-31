import { useModalMovie } from "../hooks/useModalMovie";

export function Movie({ movie }) {
  const { onMovieClick } = useModalMovie();

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
