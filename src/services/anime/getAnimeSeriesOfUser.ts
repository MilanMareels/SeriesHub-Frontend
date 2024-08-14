import axios from "axios";

const baseUrl = process.env.BASE_URL!;

export const getAnimeSerieOfUser = async (userId: string, page: number, listStatus: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}/AnimeSeries`, { params: { page: page, listStatus: listStatus } });

  return response.data;
};
