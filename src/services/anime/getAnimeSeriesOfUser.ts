import axios from "axios";

const baseUrl = process.env.BASE_URL!;

export const getAnimeSerieOfUser = async (userId: string, page: number, listStatus: string, search: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}/AnimeSeries`, { params: { page: page, listStatus: listStatus, search: search } });

  return response.data;
};
