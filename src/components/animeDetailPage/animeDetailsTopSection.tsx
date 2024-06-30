import { AnimeDetails } from "@/models/anime/AnimeDetails";

interface AnimeDetailsTopSectionProps {
  animeDetailSeries: AnimeDetails;
}

const AnimeDetailsTopSection = ({ animeDetailSeries }: AnimeDetailsTopSectionProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-end md:justify-center">
      <img className="md:mr-5 mb-5 md:mb-0" src={`${animeDetailSeries?.data.images["jpg"].large_image_url}`} alt="Anime Image" />
      <div className="flex flex-col gap-5 text-center md:text-left">
        <h1 className="text-white text-xl">{animeDetailSeries?.data.title}</h1>
        <p className="text-white">{animeDetailSeries?.data.synopsis}</p>
      </div>
    </div>
  );
};

export default AnimeDetailsTopSection;
