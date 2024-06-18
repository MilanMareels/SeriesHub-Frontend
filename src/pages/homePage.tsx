import AnimeCard from "@/components/homePage/AnimeCard";
import useAnimeSeries from "../hooks/useAnime";
import Loading from "@/components/ui/loading";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import ErrorComponent from "@/components/error/ErrorComponent";

function HomePage() {
  const { userId } = useContext(AuthContext);

  const { animeSeries, isError, isLoading, error } = useAnimeSeries(userId);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center flex-wrap">
      {animeSeries?.map((animeSerie) => (
        <AnimeCard animeSerie={animeSerie} key={animeSerie._id} />
      ))}
    </div>
  );
}

export default HomePage;
