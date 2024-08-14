import { Search } from "lucide-react";

const SearchInAnimeSeriesOfUser = () => {
  return (
    <div className="flex gap-1">
      <input type="text" className="p-2.5 w-64 bg-[#1B1A55] rounded-lg placeholder:text-white focus:text-white text-white" placeholder="Find your anime..." />
      <button className="p-2.5 bg-[#1B1A55] rounded-lg text-white transition duration-150 hover:scale-110 ease-in-out">
        <Search />
      </button>
    </div>
  );
};

export default SearchInAnimeSeriesOfUser;
