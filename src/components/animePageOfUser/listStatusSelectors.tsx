import { useContext } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../ui/select";
import { FilterContext } from "@/contexts/FilterContext";

const ListStatusSelectors = () => {
  const { listStatus, setListStatus } = useContext(FilterContext);
  return (
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
  );
};

export default ListStatusSelectors;
