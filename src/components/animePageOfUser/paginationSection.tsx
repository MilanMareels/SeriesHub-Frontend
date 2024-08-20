import { useContext } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "../ui/pagination";
import { FilterContext } from "@/contexts/FilterContext";

const PaginationSection = () => {
  const { page, setPage, nextPage } = useContext(FilterContext);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <Pagination className="p-5 text-white">
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer hover:bg-white/10 rounded-lg">{page !== 1 ? <PaginationPrevious onClick={() => handlePreviousPage()} /> : ""}</PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hover:cursor-pointer hover:bg-white/10 rounded-lg">{nextPage && <PaginationNext onClick={() => handleNextPage()} />}</PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
