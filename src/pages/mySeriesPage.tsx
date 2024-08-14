import AnimePageOfUserWrapper from "@/components/animePageOfUser/animePageOfUserWrapper";
import FilterSection from "@/components/animePageOfUser/filterSection";
import PaginationSection from "@/components/animePageOfUser/paginationSection";
import { useState } from "react";

const MySeriesPage = () => {
  const [page, setPage] = useState<number>(1);
  const [listStatus, setListStatus] = useState<string>("2");

  return (
    <div className="h-full w-full">
      <FilterSection listStatus={listStatus} setListStatus={setListStatus} />

      <AnimePageOfUserWrapper page={page} listStatus={listStatus} />

      <PaginationSection page={page} setPage={setPage} />
    </div>
  );
};

export default MySeriesPage;
