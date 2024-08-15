import AnimePageOfUserWrapper from "@/components/animePageOfUser/animePageOfUserWrapper";
import FilterSection from "@/components/animePageOfUser/filterSection";
import PaginationSection from "@/components/animePageOfUser/paginationSection";
import { FilterProvider } from "@/contexts/FilterContext";

const MySeriesPage = () => {
  return (
    <div className="h-full w-full">
      <FilterProvider>
        <FilterSection />

        <AnimePageOfUserWrapper />

        <PaginationSection />
      </FilterProvider>
    </div>
  );
};

export default MySeriesPage;
