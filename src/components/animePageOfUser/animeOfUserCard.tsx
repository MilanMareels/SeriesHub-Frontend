import { Data } from "@/models/animeSerieOfUser/animeSerieOfUser";
import { Card, CardContent, CardTitle } from "../ui/card";

interface AnimeCardOfUserProps {
  aniumeSerieOfUser: Data;
}

const AnimeCardOfUser = ({ aniumeSerieOfUser }: AnimeCardOfUserProps) => {
  return (
    <Card className="w-[250px] text-white m-3 mb-0 border-none">
      <div
        className="bg-cover bg-center bg-no-repeat h-[350px] w-full overflow-hidden mb-2 rounded-lg"
        style={{
          backgroundImage: `url(${aniumeSerieOfUser.animeImage})`,
        }}
      ></div>
      <CardContent className="text-center">
        <CardTitle className="text-lg truncate" title={aniumeSerieOfUser.animeTitle}>
          {aniumeSerieOfUser.animeTitle}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default AnimeCardOfUser;
