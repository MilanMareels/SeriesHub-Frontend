import { AuthContext } from "@/contexts/AuthContext";
import useAnimeSeriesOfUser from "@/hooks/useAnimeOfUser";
import { useContext } from "react";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../ui/loading";
import AnimeCardOfUser from "./animeOfUserCard";
import { FilterContext } from "@/contexts/FilterContext";

const AnimePageOfUserWrapper = () => {
  const { userId } = useContext(AuthContext);
  const { search, listStatus, page, setNextPage } = useContext(FilterContext);
  const minAmoutOfChar = 3;
  const validSearch = search.length > minAmoutOfChar ? search : "";

  const { animeSeriesOfUser, isError, isLoading, error } = useAnimeSeriesOfUser(userId, page, listStatus, validSearch);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (animeSeriesOfUser) {
    setNextPage(animeSeriesOfUser!.nextPage);
  }

  return (
    <div className="h-full w-full flex items-center justify-center flex-wrap">
      {animeSeriesOfUser?.animeSeries.map((aniumeSerieOfUser) => (
        <AnimeCardOfUser aniumeSerieOfUser={aniumeSerieOfUser} />
      ))}
    </div>
  );
};

export default AnimePageOfUserWrapper;
