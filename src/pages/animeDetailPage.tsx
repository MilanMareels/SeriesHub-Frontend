import DialogAddToList from "@/components/animeDetailPage/adToListPopUp";
import AnimeDetailsTopSection from "@/components/animeDetailPage/animeDetailsTopSection";
import AnimeInfoSection from "@/components/animeDetailPage/animeInfoSection";
import AnimeTrailerSection from "@/components/animeDetailPage/animeTrailerSection";
import ErrorComponent from "@/components/error/ErrorComponent";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Loading from "@/components/ui/loading";
import useAnimeDetailSeries from "@/hooks/useAnimeDetails";
import { CheckCheck, Terminal } from "lucide-react";
import { useParams } from "react-router-dom";

const AnimeDetailPage = () => {
  const { animeId } = useParams();
  const { animeDetailSeries, isError, isLoading, error } = useAnimeDetailSeries(animeId!);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-4">
      <Alert className="mb-5 bg-green-500">
        <CheckCheck className="h-4 w-4" />
        <AlertTitle>Succes</AlertTitle>
        <AlertDescription>Anime </AlertDescription>
      </Alert>

      <AnimeDetailsTopSection animeDetailSeries={animeDetailSeries!} />

      <div className="mt-5">
        <DialogAddToList animeDetailSeries={animeDetailSeries!} />
      </div>

      <div className="flex flex-col md:flex-row mt-4 gap-5 w-full">
        <AnimeTrailerSection animeDetailSeries={animeDetailSeries!} />
        <AnimeInfoSection animeDetailSeries={animeDetailSeries!} />
      </div>
    </div>
  );
};

export default AnimeDetailPage;
