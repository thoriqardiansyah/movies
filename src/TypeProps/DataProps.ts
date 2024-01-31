export type DataProps = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  media_type: string;
  overview: string;
  number_of_season: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
};
