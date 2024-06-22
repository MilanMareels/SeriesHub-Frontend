import { Data } from "@/models/anime/AnimeSerie";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { Star } from "lucide-react";

interface AnimeCardPorps {
  animeSerie: Data;
}

export default function AnimeCard({ animeSerie }: AnimeCardPorps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col text-center m-4">
          <div
            className="bg-cover bg-center bg-no-repeat h-[250px] w-[150px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${animeSerie.images["jpg"].image_url})`,
            }}
          ></div>

          <p className="text-white max-w-[150px] truncate" title={animeSerie.title}>
            {animeSerie.title}
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="bg-white w-full h-full p-5 rounded-lg">
          <div className="flex justify-between m-2 gap-2">
            <p>{animeSerie.title}</p>

            {animeSerie.season && (
              <h1>
                {animeSerie.season} - {animeSerie.year}
              </h1>
            )}
            {animeSerie.score && (
              <div className="flex gap-1">
                <Star size={20} /> {animeSerie.score}
              </div>
            )}
          </div>

          <p className="m-2">{animeSerie.episodes} episodes</p>

          <div className="flex flex-wrap">
            {animeSerie.genres.map((genre) => (
              <div key={genre.mal_id} className="bg-[#1B1A55] rounded p-2 text-center m-1">
                <p className="text-white">{genre.name}</p>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
