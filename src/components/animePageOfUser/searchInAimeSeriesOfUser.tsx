import { FilterContext } from "@/contexts/FilterContext";
import { useContext } from "react";

const SearchInAnimeSeriesOfUser = () => {
  const { search, setSearch } = useContext(FilterContext);
  return (
    <div className="flex gap-1">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="p-2.5 w-64 bg-[#1B1A55] rounded-lg placeholder:text-white focus:text-white text-white"
        placeholder="Find your anime..."
      />
    </div>
  );
};

export default SearchInAnimeSeriesOfUser;
