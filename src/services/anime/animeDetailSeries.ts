import axios from "axios";

export const getAnimeDetailSeries = async (animeId: string) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);

  return response.data;
};
