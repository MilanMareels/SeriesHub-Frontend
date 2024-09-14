import { User } from "@/models/user/User";
import { Button } from "../ui/button";
interface TopSectionProps {
  user: User;
}

const TopSection = ({ user }: TopSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center border-solid border-2 border-white w-[80%] p-5">
      <h1 className="text-2xl text-white font-bold mb-4">{user.userName}</h1>
      <img
        src="https://i.pinimg.com/736x/48/a4/d8/48a4d8c9d2debc2fc27532fd53eb6913.jpg"
        alt="profile-pic"
        className="w-[250px] h-[250px] rounded-full"
      />
      <Button className="mt-4 bg-[#1B1A55] text-white" disabled>
        Add friend
      </Button>
    </div>
  );
};

export default TopSection;
