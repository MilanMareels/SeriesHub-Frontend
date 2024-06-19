import useAnimeSeries from "@/hooks/useAnime";
import AnimePage from "@/pages/animePage";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";
import { AnimeSerie } from "@/models/anime/AnimeSerie";

const AnimePageWrapper = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const { animeSeries, isError, isLoading, error } = useAnimeSeries(searchValue, page);

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
      <div>
        <PagInatioComp setPage={setPage} page={page} has_next_page={animeSeries?.pagination.has_next_page!} />
      </div>
    </div>
  );
};

interface PagiantipComProps {
  page: number;
  setPage: (page: number) => void;
  has_next_page: boolean;
}

const PagInatioComp = ({ setPage, page, has_next_page }: PagiantipComProps) => {
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <Pagination className="p-5 text-white">
      <PaginationContent>
        <PaginationItem>{page !== 1 ? <PaginationPrevious onClick={() => handlePreviousPage()} /> : ""}</PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>{has_next_page && <PaginationNext onClick={() => handleNextPage()} />}</PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AnimePageWrapper;
