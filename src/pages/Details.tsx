import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Overview = React.lazy(() => import("../components/Overview"));
import DetailLoader from "../utils/DetailLoader";

type MovieProps = {
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
};

const Details = () => {
  const [movies, setMovies] = useState<MovieProps | null>(null);
  const { id } = useParams();
  let movie_id = Number(id);

  useEffect(() => {
    const getMoviesDetail = async () => {
      await axios
        .get(
          `
         https://api.themoviedb.org/3/movie/${movie_id}`,
          { headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` } }
        )
        .then((res) => setMovies(res.data))
        .catch((err) => console.log(err.message));
    };

    getMoviesDetail();
  }, []);

  return (
    <section className=" text-white">
      {movies !== null && (
        <>
          <div className="relative h-[600px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              alt={movies.title}
              className="h-[600px] w-full object-cover"
            />
            <span className="absolute h-full w-full bg-gradient-to-t from-black from 1% to-transparent to-95% bottom-0" />
          </div>
          <Suspense fallback={<DetailLoader />}>
            <Overview movies={movies} />
          </Suspense>
        </>
      )}
    </section>
  );
};

export default Details;
