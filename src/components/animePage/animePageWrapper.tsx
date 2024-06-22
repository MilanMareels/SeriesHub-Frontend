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

const AnimePageWrapper = ({ isError, isLoading, error, animeSeries }: AnimePageProps) => {
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {animeSeries?.data.map((animeSerie) => (
        <AnimeCard animeSerie={animeSerie} key={animeSerie.mal_id} />
      ))}
    </div>
  );
};
export default AnimePageWrapper;
