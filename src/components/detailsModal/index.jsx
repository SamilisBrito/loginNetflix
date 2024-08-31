import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { useFetch } from "../../hooks/useFetch";
import { useModalMovie } from "../../hooks/useModalMovie";
import { ItemList } from "./components/CastList";

export function DetailsModal() {
  const { movieDetails, setIsOpen, isOpen } = useModalMovie();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    if (isOpen) getData();
  }, [isOpen]);

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

  function convertRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }
  console.log(data)
  //sinopse, avaliação, data de lançamento e elenco
  if (!isOpen) return null;
  if (isOpen)
    return (
      <section className="fixed top-0 left-0 z-30 flex items-center justify-center w-full h-full bg-black/20 overflow-auto pt-5">
        <div className="relative z-30 rounded text-white bg-neutral-900  xl:w-[56rem] overflow-hidden m-auto">
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
            <div className="absolute top-1/2 md:top-3/4 left-5 z-20 text-neutral-900">
              <p className="text-3xl text-white font-semibold mb-4">
                {movieDetails?.title}
              </p>

              <a
                href="https://www.netflix.com/login"
                className="inline-flex min-w-fit items-center justify-center gap-1 rounded px-4 text-xs font-medium bg-white hover:bg-white/80"
                target="_blank"
              >
                <MdPlayArrow className="text-3xl" />
                Assistir
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 p-5 mt-1 relative z-10 shadow-top">
            <div className="max-w-xl">
              <div className="flex gap-4 text-neutral-300">
                <p>{new Date(movieDetails?.release_date).getFullYear()}</p>
                <p>{convertRuntime(data?.runtime)}</p>
              </div>

              <p className="inline text-neutral-400">
                Nota:{" "}
                <span className="text-white">
                  {movieDetails?.vote_average.toFixed(1)}
                </span>
              </p>
              <p className="mt-3">{movieDetails?.overview}</p>
            </div>

            <div className="md:max-w-[272px]">
              {data?.credits?.cast && (
                <ItemList items={data?.credits?.cast} title={"Elenco"} />
              )}
              {data?.genres && (
                <ItemList items={data?.genres} title={"Gêneros"} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
}
