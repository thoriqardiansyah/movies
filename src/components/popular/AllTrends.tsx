import React from "react";

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../utils/Loader";
import { useNavigate } from "react-router-dom";
import { DataProps } from "../../TypeProps/DataProps";
const Poster = React.lazy(() => import("../Poster"));

const AllTrends = () => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllTrending = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, {
          headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` },
        })
        .then((res) => setDatas(res.data.results));
    };

    getAllTrending();
  });

  return (
    <>
      {datas.map((data, id) => {
        return (
          <>
            {data.media_type === "movie" ? (
              <button
                onClick={() => navigate(`/discover/movie/${data.id}`)}
                key={id}
              >
                <Suspense fallback={<Loader />}>
                  <Poster data={data} />
                </Suspense>
              </button>
            ) : (
              <button
                onClick={() => navigate(`/discover/tv/${data.id}`)}
                key={id}
              >
                <Suspense fallback={<Loader />}>
                  <Poster data={data} />
                </Suspense>
              </button>
            )}
          </>
        );
      })}
    </>
  );
};

export default AllTrends;
