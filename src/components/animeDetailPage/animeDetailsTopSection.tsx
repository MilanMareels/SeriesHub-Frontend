import { AnimeDetails } from "@/models/anime/AnimeDetails";
import { CheckCheck } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

interface AnimeDetailsTopSectionProps {
  success: boolean;
  selectedStatus: string;
  animeDetailSeries: AnimeDetails;
}

const AnimeDetailsTopSection = ({ animeDetailSeries, success, selectedStatus }: AnimeDetailsTopSectionProps) => {
  return (
    <div>
      {success && (
        <Alert className="mb-5 bg-[#2d884d] text-white">
          <CheckCheck className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Anime succesvol toegevoegd aan je "{selectedStatus}" lijst!</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col items-center md:flex-row md:items-end md:justify-center">
        <img
          className="md:mr-5 mb-5 md:mb-0"
          src={`${animeDetailSeries?.data.images["jpg"].large_image_url}`}
          alt="Anime Image"
        />
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-white text-xl">{animeDetailSeries?.data.title_english}</h1>
          <p className="text-white">{animeDetailSeries?.data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsTopSection;
