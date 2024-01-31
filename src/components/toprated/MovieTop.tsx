import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import { DataProps } from "../../TypeProps/DataProps";
const Poster = React.lazy(() => import("../Poster"));

const MovieTop = () => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieTrends = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/movie/top_rated`, {
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

export default MovieTop;
