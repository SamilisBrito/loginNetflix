import { useModalMovie } from "../hooks/useModalMovie";
import defaultImage from "../assets/netflix.svg";

export function Movie({ movie, width }) {
  const { onMovieClick } = useModalMovie();

  console.log("movie", movie);

  return (
    <div className={`text-white mr-2 ${width} overflow-hidden`}>
      <img
        className="w-full h-full object-cover rounded"
        src={
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`
            : defaultImage
        }
        alt={movie.title}
        onClick={() => onMovieClick(movie)}
      />
    </div>
  );
}
