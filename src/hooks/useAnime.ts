import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getAnimeSeries } from "../services/anime/animeSeries";
import { AnimeSerie } from "@/models/anime/AnimeSerie";

const useAnimeSeries = (querySearch: string | null, page: number) => {
  const { data, isError, isLoading, error, refetch } = useQuery<AnimeSerie, AxiosError>(["animeSeries", querySearch, page], () => getAnimeSeries(querySearch, page));

  return {
    animeSeries: data,
    isError,
    isLoading,
    error,
    refetch,
  };
};

export default useAnimeSeries;
