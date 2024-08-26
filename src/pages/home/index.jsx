import { useEffect } from "react";
import { Carousel } from "../../components/Carousel";
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    pagination();
  }, []);
  async function pagination() {
    console.log(import.meta.env)
    await request(
      `https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }

  console.log(data);
  return (
    <>
      <Carousel />
    </>
  );
}
