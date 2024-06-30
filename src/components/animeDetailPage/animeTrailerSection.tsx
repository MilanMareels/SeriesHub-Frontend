import { AnimeDetails } from "@/models/anime/AnimeDetails";
import { CircleX } from "lucide-react";

interface AnimeTrailerSectionProps {
  animeDetailSeries: AnimeDetails;
}

const AnimeTrailerSection = ({ animeDetailSeries }: AnimeTrailerSectionProps) => {
  return (
    <>
      {animeDetailSeries?.data.trailer.embed_url ? (
        <div className="md:w-11/12 w-full">
          <iframe className="w-full mt-2" height={350} src={animeDetailSeries?.data.trailer.embed_url}></iframe>
        </div>
      ) : (
        <div className="md:w-11/12 w-full bg-white flex justify-center items-center rounded-lg">
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <CircleX size={50} color="red" />
            <h1 className="text-xl">Oops! No trailer found</h1>
            <p className="text-center">
              It seems that there is currently no YouTube trailer available for this title. Please try again later or check out the other anime's and
              content available on our site.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeTrailerSection;
