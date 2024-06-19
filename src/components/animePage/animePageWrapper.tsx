import useAnimeSeries from "@/hooks/useAnime";
import AnimePage from "@/pages/animePage";
import { useState } from "react";

const AnimePageWrapper = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const { animeSeries, isError, isLoading, error } = useAnimeSeries(searchValue, page);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="w-3/5">
        <input
          type="text"
          value={searchValue || ""}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter search query"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <AnimePage isError={isError} isLoading={isLoading} error={error} animeSeries={animeSeries!} />
    </div>
  );
};

export default AnimePageWrapper;
