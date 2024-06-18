import ErrorComponent from "@/components/error/ErrorComponent";
import AnimeCard from "@/components/homePage/AnimeCard";
import Loading from "@/components/ui/loading";
import { AuthContext } from "@/contexts/AuthContext";
import useAnimeSeries from "@/hooks/useAnime";
import { useContext } from "react";

const MySeriesPage = () => {
  const { userId } = useContext(AuthContext);

  const { animeSeries, isError, isLoading, error } = useAnimeSeries(userId);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center flex-wrap h-full w-full">
      {animeSeries?.map((animeSerie) => (
        <AnimeCard animeSerie={animeSerie} key={animeSerie._id} />
      ))}
    </div>
  );
};

export default MySeriesPage;
