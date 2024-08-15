import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getAnimeDetailSeries } from "@/services/anime/animeDetailSeries";
import { AnimeDetails } from "@/models/anime/AnimeDetails";

const useAnimeDetailSeries = (animeId: string) => {
  const { data, isError, isLoading, error } = useQuery<AnimeDetails, AxiosError>(["animeDetailSeries"], () => getAnimeDetailSeries(animeId));

  return {
    animeDetailSeries: data,
    isError,
    isLoading,
    error,
  };
};

export default useAnimeDetailSeries;
