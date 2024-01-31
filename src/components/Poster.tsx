import React from "react";

type PosterProps = {
  data: {
    id: number;
    poster_path: string;
    title: string;
    name: string;
  };
};

const Poster: React.FC<PosterProps> = ({ data }) => {
  return (
    <figure key={data.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title || data.name}
        className="h-[200px] w-[100px] lg:h-52 lg:w-36 rounded-lg text-white hover:border-2 hover:scale-125 hover:border-white transition-all duration-300 ease-linear"
      />
    </figure>
  );
};

export default Poster;
