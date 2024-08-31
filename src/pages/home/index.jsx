import { useEffect } from "react";
import { Carousel } from "../../components/carousel";
import { useFetch } from "../../hooks/useFetch";

const GENRE = {
  action: 28,
  comedy: 35,
};

export function Home() {
  const {
    data: action,
    loading: actionLoading,
    error: actionError,
    request: actionRequest,
  } = useFetch();
  const {
    data: comedy,
    loading: comedyLoading,
    error: comedyError,
    request: comedyRequest,
  } = useFetch();
  const {
    data: mostVoted,
    loading: mostVotedLoading,
    error: mostVotedError,
    request: mostVotedRequest,
  } = useFetch();

  const {
    data: heroTrailer,
    loading: heroTrailerLoading,
    error: heroTrailerError,
    request: heroTrailerRequest,
  } = useFetch();

  useEffect(() => {
    getHeroTrailer();
    getData(actionRequest, GENRE.action, 1);
    getData(comedyRequest, GENRE.comedy, 2);
    getMostVoted();
  }, []);
  async function getData(request, genre, page) {
    await request(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&include_adult=false&language=pt&page=${page}`,
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }

  async function getMostVoted() {
    await mostVotedRequest(
      `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&language=pt&page=1`,
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }
  async function getHeroTrailer() {
    await heroTrailerRequest(
      `https://api.themoviedb.org/3/movie/889737/videos?language=pt-BR`,
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }

  return (
    <>
      {heroTrailer && heroTrailer.results.length > 0 && (
        <div className="video-container">
          <iframe
            className="w-full h-screen"
            src={`https://www.youtube.com/embed/${heroTrailer.results[0].key}?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <Carousel data={action} title={"Ação"} />
      <Carousel data={comedy} title={"Comédia"} />
      <Carousel data={mostVoted} title={"Mais votados"} />
    </>
  );
}
