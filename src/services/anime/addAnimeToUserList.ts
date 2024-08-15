import { AnimeSerieToCreate } from "@/models/animeSerieOfUser/animeSerieOfUserToCreate";
import axios from "axios";

const baseUrl = process.env.BASE_URL!;

export const postAnimeToUserList = async (animeSerie: AnimeSerieToCreate) => {
  console.log(animeSerie);

  const response = await axios.post(`${baseUrl}/anime`, animeSerie);

  return response.data;
};
