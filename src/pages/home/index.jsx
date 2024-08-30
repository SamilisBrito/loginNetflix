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

  useEffect(() => {
    getData(actionRequest, GENRE.action, 1);
    getData(comedyRequest, GENRE.comedy, 2);
    getMostVoted();
  }, []);

  async function getData(request, genre, page) {
    await request(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&include_adult=false&language=en-US&page=${page}`,
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
      `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&language=en-US&page=1`,
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
      <Carousel data={action} title={"Ação"} />
      <Carousel data={comedy} title={"Comédia"} />
      <Carousel data={mostVoted} title={"Mais votados"} />
    </>
  );
}
