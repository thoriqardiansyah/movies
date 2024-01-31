import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from "../components/Backdrop";
import { SwiperSlide } from "swiper/react";
import { DataProps } from "../TypeProps/DataProps";
import GalleryWrapper from "../layout/GalleryWrapper";
import MovieTop from "../components/toprated/MovieTop";
import TvTop from "../components/toprated/TvTop";

const TopRated = () => {
  const [datas, setDatas] = useState<DataProps[]>([]);

  useEffect(() => {
    const getPopular = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
          {
            headers: { Authorization: `${import.meta.env.VITE_API_TOKEN}` },
          }
        )
        .then((res) => setDatas(res.data.results));
    };

    getPopular();
  }, []);

  console.log(datas);

  return (
    <section>
      <Backdrop>
        {datas.map((data, id) => {
          return (
            <SwiperSlide className="relative" key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt=""
                className="w-full h-[650px] object-cover object-top"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black from-10%">
                <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-xl md:text-4xl font-bold text-white">
                    {data.title || data.name}
                  </h2>
                  <p className="text-2xl my-2 font-semibold text-white">
                    {new Date(
                      data.release_date || data.first_air_date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                    })}
                  </p>
                  <h1 className="text-sm md:text-xl font-light text-white">
                    {data.overview}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Backdrop>

      <GalleryWrapper title="Movies Top Rated">
        <MovieTop />
      </GalleryWrapper>

      <GalleryWrapper title="Tv Series Top Rated">
        <TvTop />
      </GalleryWrapper>
    </section>
  );
};

export default TopRated;
