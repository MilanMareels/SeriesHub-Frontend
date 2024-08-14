import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AddToListSection from "./addToListSection";
import { postAnimeToUserList } from "@/services/anime/addAnimeToUserList";
import { AnimeDetails } from "@/models/anime/AnimeDetails";
import { AnimeSerieToCreate } from "@/models/animeSerieOfUser/animeSerieOfUserToCreate";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface DialogAddToListProps {
  animeDetailSeries: AnimeDetails;
  setSuccess: (succes: boolean) => void;
  selectedStatus: string;
  setSelectedStatus: (selectedStatus: string) => void;
}

function DialogAddToList({ animeDetailSeries, setSuccess, selectedStatus, setSelectedStatus }: DialogAddToListProps) {
  const { userId } = useContext(AuthContext);

  const handleAddAnimeToUserList = async (listStatus: string) => {
    const animeSerieToAddToUser: AnimeSerieToCreate = {
      animeTitle: animeDetailSeries.data.title,
      description: animeDetailSeries.data.synopsis,
      genres: animeDetailSeries.data.genres.map((gerne) => {
        return gerne.name;
      }),
      image: animeDetailSeries.data.images["jpg"].large_image_url,
      trailer: animeDetailSeries.data.trailer.embed_url,
      episodes: animeDetailSeries.data.episodes,
      episodesDuration: animeDetailSeries.data.duration,
      listStatus: listStatus,
      userId: userId,
      status: animeDetailSeries.data.status,
      season: animeDetailSeries.data.season,
      score: animeDetailSeries.data.score,
      source: animeDetailSeries.data.source,
      format: animeDetailSeries.data.type,
    };

    await postAnimeToUserList(animeSerieToAddToUser);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1B1A55] text-white">Add to list</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] rounded text-white bg-[#1B1A55]">
        <DialogHeader className="flex gap-2 items-center md:items-start">
          <DialogTitle>Add to your anime collection</DialogTitle>
          <DialogDescription>Select the status in which you want to place the anime series in your collection.</DialogDescription>
          <AddToListSection selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="bg-white text-[#1B1A55]" onClick={() => handleAddAnimeToUserList(selectedStatus)}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogAddToList;
