import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";

interface PaginationComponentProps {
  page: number;
  setPage: (page: number) => void;
  has_next_page?: boolean;
}

const PaginationComponent = ({ setPage, page, has_next_page }: PaginationComponentProps) => {
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

export default PaginationComponent;
