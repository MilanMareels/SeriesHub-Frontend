import { AuthContext } from "@/contexts/AuthContext";
import useAnimeSeriesOfUser from "@/hooks/useAnimeOfUser";
import { useContext } from "react";
import ErrorComponent from "../error/ErrorComponent";
import Loading from "../ui/loading";
import AnimeCardOfUser from "./animeOfUserCard";

interface AnimePageOfUserWrapperProps {
  page: number;
  listStatus: string;
}

const AnimePageOfUserWrapper = ({ page, listStatus }: AnimePageOfUserWrapperProps) => {
  const { userId } = useContext(AuthContext);
  const { animeSeriesOfUser, isError, isLoading, error } = useAnimeSeriesOfUser(userId, page, listStatus);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full flex items-center justify-center flex-wrap">
      {animeSeriesOfUser?.map((aniumeSerieOfUser) => (
        <AnimeCardOfUser aniumeSerieOfUser={aniumeSerieOfUser} />
      ))}
    </div>
  );
};

export default AnimePageOfUserWrapper;
