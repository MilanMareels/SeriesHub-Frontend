import useAnimeSeries from "@/hooks/useAnime";

import { useState } from "react";
import PaginationComponent from "../components/animePage/paginationComponent";
import SearchField from "../components/animePage/searchField";
import AnimePageWrapper from "@/components/animePage/animePageWrapper";

const AnimePage = () => {
  const [currentSearchValue, setCurrentSearchValue] = useState<string | null>("");
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [page, setPage] = useState<number>(1);
  const { animeSeries, isError, isLoading, error } = useAnimeSeries(searchValue, page);

  const handleSearch = () => {
    setSearchValue(currentSearchValue);
    setPage(1);
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <SearchField
        currentSearchValue={currentSearchValue}
        setCurrentSearchValue={setCurrentSearchValue}
        handleSearch={handleSearch}
      />

      <AnimePageWrapper isError={isError} isLoading={isLoading} error={error} animeSeries={animeSeries!} />

      <PaginationComponent page={page} setPage={setPage} has_next_page={animeSeries?.pagination.has_next_page} />
    </div>
  );
};

export default AnimePage;
