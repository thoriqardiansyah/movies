import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../../utils/Loader";
import { useNavigate } from "react-router-dom";
import { DataProps } from "../../TypeProps/DataProps";
const Poster = React.lazy(() => import("../Poster"));

const TvSeries = () => {
  const [datas, setDatas] = useState<DataProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTvSeries = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/discover/tv`, {
          headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` },
        })
        .then((res) => {
          setDatas(res.data.results);
        })
        .catch((err) => console.log(err.message));
    };

    getTvSeries();
  }, []);

  return (
    <>
      {datas.map((data, id) => {
        return (
          <button onClick={() => navigate(`/discover/tv/${data.id}`)} key={id}>
            <Suspense fallback={<Loader />}>
              <Poster data={data} />
            </Suspense>
          </button>
        );
      })}
    </>
  );
};

export default TvSeries;
