import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddToListSection from "./addToListSection";

function DialogAddToList() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1B1A55] text-white">Add to list</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] rounded text-white bg-[#1B1A55]">
        <DialogHeader className="flex gap-2 items-center md:items-start">
          <DialogTitle>Add to your anime collection</DialogTitle>
          <DialogDescription>
            Select the status in which you want to place the anime series in your collection.
          </DialogDescription>
          <AddToListSection />
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" className="bg-white text-[#1B1A55]">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogAddToList;
