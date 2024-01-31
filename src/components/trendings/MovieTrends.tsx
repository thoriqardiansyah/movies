import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
const Poster = React.lazy(() => import("../Poster"));

type MovieProps = {
  id: number;
  poster_path: string;
  title: string;
  name: string;
};

const MovieTrends = () => {
  const [datas, setDatas] = useState<MovieProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieTrends = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
          headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` },
        })
        .then((res) => {
          setDatas(res.data.results);
        })
        .catch((err) => console.log(err.message));
    };

    getMovieTrends();
  }, []);

  return (
    <>
      {datas.map((data, id) => {
        return (
          <button
            onClick={() => navigate(`/discover/movie/${data.id}`)}
            key={id}
          >
            <Suspense fallback={<Loader />}>
              <Poster data={data} />
            </Suspense>
          </button>
        );
      })}
    </>
  );
};

export default MovieTrends;
