import DialogAddToList from "@/components/animeDetailPage/adToListPopUp";
import AnimeDetailsTopSection from "@/components/animeDetailPage/animeDetailsTopSection";
import AnimeInfoSection from "@/components/animeDetailPage/animeInfoSection";
import AnimeTrailerSection from "@/components/animeDetailPage/animeTrailerSection";
import ErrorComponent from "@/components/error/ErrorComponent";
import Loading from "@/components/ui/loading";
import useAnimeDetailSeries from "@/hooks/useAnimeDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetailPage = () => {
  const { animeId } = useParams();
  const [success, setSuccess] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const { animeDetailSeries, isError, isLoading, error } = useAnimeDetailSeries(animeId!);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-4">
      <AnimeDetailsTopSection animeDetailSeries={animeDetailSeries!} success={success} selectedStatus={selectedStatus} />

      <div className="mt-5">
        <DialogAddToList animeDetailSeries={animeDetailSeries!} setSuccess={setSuccess} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
      </div>

      <div className="flex flex-col md:flex-row mt-4 gap-5 w-full">
        <AnimeTrailerSection animeDetailSeries={animeDetailSeries!} />
        <AnimeInfoSection animeDetailSeries={animeDetailSeries!} />
      </div>
    </div>
  );
};

export default AnimeDetailPage;
