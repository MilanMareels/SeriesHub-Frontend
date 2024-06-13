import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getAnimeSeries } from "../services/anime/animeSeries";
import { AnimeSerie } from "../models/anime/Anime";

const useAnimeSeries = (userId: string) => {
	const { data, isError, isLoading, error } = useQuery<AnimeSerie[], AxiosError>(["animeSeries"], () => getAnimeSeries(userId));

	return {
		animeSeries: data,
		isError,
		isLoading,
		error
	};
};

export default useAnimeSeries;
