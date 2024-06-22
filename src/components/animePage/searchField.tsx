import { Search } from "lucide-react";

interface SearchFieldProps {
  currentSearchValue: string | null;
  setCurrentSearchValue: (currentSearchValue: string | null) => void;
  handleSearch: () => void;
}

const SearchField = ({ currentSearchValue, setCurrentSearchValue, handleSearch }: SearchFieldProps) => {
  return (
    <div className="flex gap-1 m-4">
      <input
        type="text"
        value={currentSearchValue || ""}
        onChange={(e) => setCurrentSearchValue(e.target.value)}
        className="p-2.5 w-64 ml-2 bg-[#1B1A55] rounded-lg placeholder:text-white focus:text-white text-white"
        placeholder="Find anime..."
      />
      <button
        className="p-2.5 bg-[#1B1A55] rounded-lg text-white transition duration-150 hover:scale-110 ease-in-out"
        onClick={() => handleSearch()}
      >
        <Search />
      </button>
    </div>
  );
};

export default SearchField;
