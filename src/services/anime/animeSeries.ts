import axios from "axios";

export const getAnimeSeries = async (querySearch: string | null, page: number) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${querySearch}&page=${page}`);

  return response.data;
};
