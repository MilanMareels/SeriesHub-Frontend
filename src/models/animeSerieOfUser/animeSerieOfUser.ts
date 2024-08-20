export interface AnimeSerie {
  animeSeries: Data[];
  nextPage: boolean;
}

export interface Data {
  animeId: string;
  animeTitle: string;
  description: string;
  genres: Genre[];
  animeImage: string;
  animeTrailer: string;
  episodes: number;
  episodesDuration: string;
  animeStatus: string;
  userRating: number;
  userId: string;
  listStatus: string;
  animeSeason: string;
  animeScore: number;
  animeSource: string;
  animeFormat: string;
}

export interface Genre {
  name: string;
}
