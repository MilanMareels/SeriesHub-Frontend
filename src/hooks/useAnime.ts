import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getAnimeSeries } from "../services/anime/animeSeries";
import { AnimeSerie } from "@/models/anime/AnimeSerie";

const useAnimeSeries = (querySearch: string, page: number) => {
  const { data, isError, isLoading, error } = useQuery<AnimeSerie, AxiosError>(["animeSeries"], () =>
    getAnimeSeries(querySearch, page)
  );

  return {
    animeSeries: data,
    isError,
    isLoading,
    error,
  };
};

export default useAnimeSeries;
