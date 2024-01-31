import React from "react";

type OverviewProps = {
  movies: {
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
};

const Overview: React.FC<OverviewProps> = ({ movies }) => {
  return (
    <div className="flex m-10">
      <img
        src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
        className="w-[200px] h-[300px] mr-10 shadow-xl rounded-lg"
        alt={movies.title || movies.name}
      />
      <div>
        <h2 className="text-3xl font-bold">{movies.title || movies.name}</h2>
        <div className="my-2">
          <p className="text-base font-semibold mb-1">Release Date:</p>
          <h3 className="text-xl font-bold">
            {new Date(
              movies.release_date || movies.first_air_date
            ).toLocaleDateString("en-US", {
              day: "numeric",
              weekday: "long",
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>
        <div className="my-2">
          <p className="text-base font-semibold mb-1">Overview:</p>
          <p className="text-base font-normal text-justify">
            {movies.overview}
          </p>
        </div>
        <div className=" my-2">
          <p className="text-lg font-semibold">Genre:</p>
          <div className="flex gap-2 my-2">
            {movies.genres.map((movie) => {
              return (
                <p
                  className="px-2 py-1 border-white border rounded-lg"
                  key={movie.id}
                >
                  {movie.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
