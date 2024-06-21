import AnimeCard from "@/components/animePage/animeCard";
import ErrorComponent from "@/components/error/ErrorComponent";
import Loading from "@/components/ui/loading";
import { AnimeSerie } from "@/models/anime/AnimeSerie";
import { AxiosError } from "axios";

interface AnimePageProps {
  isError: any;
  isLoading: boolean;
  error: AxiosError<unknown, any> | null;
  animeSeries: AnimeSerie;
}

const AnimePage = ({ isError, isLoading, error, animeSeries }: AnimePageProps) => {
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap bg-green-600/55">
      {animeSeries?.data.map((animeSerie) => (
        <AnimeCard animeSerie={animeSerie} key={animeSerie.mal_id} />
      ))}
    </div>
  );
};
export default AnimePage;
