import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddToListSectionProps {
  selectedStatus: string;
  setSelectedStatus: (selectedStatus: string) => void;
}

const AddToListSection = ({ selectedStatus, setSelectedStatus }: AddToListSectionProps) => {
  return (
    <div className="bg-[#1B1A55] text-white -ml-1">
      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-[#0e0e14] text-white">
            <SelectItem value="To Watch" className="hover:bg-white/55">
              To Watch
            </SelectItem>
            <SelectItem value="Watching" className="hover:bg-white/55">
              Watching
            </SelectItem>
            <SelectItem value="Watched" className="hover:bg-white/55">
              Watched
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AddToListSection;
