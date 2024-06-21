import useAnimeSeries from "@/hooks/useAnime";
import AnimePage from "@/pages/animePage";
import { useState } from "react";
import PaginationComponent from "./paginationComponent";

const AnimePageWrapper = () => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [page, setPage] = useState<number>(1);
  const { animeSeries, isError, isLoading, error } = useAnimeSeries(searchValue, page);

  return (
    <div className="flex flex-col bg-red-900 p-4 space-y-4">
      <input
        type="text"
        value={searchValue || ""}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block p-2.5 w-64 ml-2"
        placeholder="Find anime..."
      />

      <AnimePage isError={isError} isLoading={isLoading} error={error} animeSeries={animeSeries!} />
    </div>
  );
};

export default AnimePageWrapper;
