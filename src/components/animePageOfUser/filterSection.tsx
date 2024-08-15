import ListStatusSelectors from "./listStatusSelectors";
import SearchInAnimeSeriesOfUser from "./searchInAimeSeriesOfUser";

const FilterSection = () => {
  return (
    <div className="flex flex-col items-center m-4 gap-4">
      <SearchInAnimeSeriesOfUser />
      <ListStatusSelectors />
    </div>
  );
};

export default FilterSection;
