export function Movie({ movie, onMovieClick }) {
  return (
    <div key={movie.id} className=" text-white">
      <img
        src={`
https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie.title}
      />
      {/* onClick={() => onMovieClick(movie)} */}
    </div>
  );
}
