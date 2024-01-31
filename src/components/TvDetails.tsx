import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Overview = React.lazy(() => import("./Overview"));
import DetailLoader from "../utils/DetailLoader";
import { DataProps } from "../TypeProps/DataProps";

const TvDetails = () => {
  const [movies, setMovies] = useState<DataProps | null>(null);
  const { id } = useParams();
  let tv_id = Number(id);

  useEffect(() => {
    const getTvDetail = async () => {
      await axios
        .get(
          `
         https://api.themoviedb.org/3/tv/${tv_id}`,
          { headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` } }
        )
        .then((res) => setMovies(res.data))
        .catch((err) => console.log(err.message));
    };

    getTvDetail();
  }, []);

  return (
    <section className=" text-white">
      {movies !== null && (
        <>
          <div className="relative h-[600px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              alt={movies.name}
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

export default TvDetails;
