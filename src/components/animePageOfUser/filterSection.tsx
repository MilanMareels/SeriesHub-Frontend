import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../ui/select";
import SearchInAnimeSeriesOfUser from "./searchInAimeSeriesOfUser";

interface FilterSectionProps {
  listStatus: string;
  setListStatus: (listStatus: string) => void;
}

const FilterSection = ({ listStatus, setListStatus }: FilterSectionProps) => {
  return (
    <div className="flex flex-col items-center m-4 gap-4">
      <SearchInAnimeSeriesOfUser />
      <div className="w-64 bg-[#1B1A55]">
        <Select value={listStatus} onValueChange={setListStatus}>
          <SelectTrigger className="text-white">
            <SelectValue placeholder="Select your watch status" />
          </SelectTrigger>
          <SelectContent className="bg-[#1B1A55] text-white">
            <SelectGroup>
              <SelectItem value="1">To Watch</SelectItem>
              <SelectItem value="2">Watching</SelectItem>
              <SelectItem value="3">Watched</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSection;
