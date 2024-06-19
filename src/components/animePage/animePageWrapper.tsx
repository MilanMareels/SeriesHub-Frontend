import useAnimeSeries from "@/hooks/useAnime";
import AnimePage from "@/pages/animePage";
import { useState } from "react";

const AnimePageWrapper = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { animeSeries, isError, isLoading, error } = useAnimeSeries(searchValue, 1);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-6 m-auto">
        <input
          type="text"
          value={searchValue || ""}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5"
          placeholder="Find anime..."
        />
      </div>
      <AnimePage isError={isError} isLoading={isLoading} error={error} animeSeries={animeSeries!} />
    </div>
  );
};

export default AnimePageWrapper;
