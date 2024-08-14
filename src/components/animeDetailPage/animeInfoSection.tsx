import { AnimeDetails } from "@/models/anime/AnimeDetails";

interface AnimeInfoSectionProps {
  animeDetailSeries: AnimeDetails;
}

const AnimeInfoSection = ({ animeDetailSeries }: AnimeInfoSectionProps) => {
  return (
    <div className="bg-white md:h-[360px] md:w-2/12 w-full flex flex-col items-start justify-start rounded-lg overflow-auto">
      <div className="m-4">
        <div className="mt-2">
          <strong>Format</strong>
          <p>{animeDetailSeries?.data.type}</p>
        </div>
        <div className="mt-2">
          <strong>Episodes</strong>
          <p>{animeDetailSeries?.data.episodes}</p>
        </div>
        <div className="mt-2">
          <strong>Episode Duration</strong>
          <p>{animeDetailSeries?.data.duration}</p>
        </div>
        <div className="mt-2">
          <strong>Status</strong>
          <p>{animeDetailSeries?.data.status}</p>
        </div>

        <div className="mt-2">
          <strong>Season</strong>
          <p>{animeDetailSeries?.data.season}</p>
        </div>
        <div className="mt-2">
          <strong>Score</strong>
          <p>{animeDetailSeries?.data.score}</p>
        </div>
        <div className="mt-2">
          <strong>Source</strong>
          <p>{animeDetailSeries?.data.source}</p>
        </div>
        <div className="mt-2">
          <strong>Genres</strong>
          {animeDetailSeries?.data.genres.map((genre) => (
            <p key={genre.name}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeInfoSection;
