import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { AnimeSerie } from "@/models/animeSerieOfUser/animeSerieOfUser";
import { getAnimeSerieOfUser } from "@/services/anime/getAnimeSeriesOfUser";

const useAnimeSeriesOfUser = (userId: string, page: number, listStatus: string, search: string) => {
  const { data, isError, isLoading, error } = useQuery<AnimeSerie, AxiosError>(["animeSeriesOfUser", page, listStatus, search], () => getAnimeSerieOfUser(userId, page, listStatus, search));

  return {
    animeSeriesOfUser: data,
    isError,
    isLoading,
    error,
  };
};

export default useAnimeSeriesOfUser;
