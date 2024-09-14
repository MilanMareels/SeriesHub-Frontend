import { User } from "@/models/user/User";

interface InfoSectionProps {
  user: User;
}

const InfoSection = ({ user }: InfoSectionProps) => {
  return (
    <div className="mt-5 mb-5 border-solid border-2 border-white w-[80%] p-5">
      <div className="flex gap-10 text-white mb-2">
        <p className="font-bold">Joined</p>
        <p className="ml-auto">{new Date(user!.accountCreated).toLocaleDateString()}</p>
      </div>
      <div className="flex text-white  mb-2">
        <p className="font-bold">Friends</p>
        <p className="ml-auto">Coming soon</p>
      </div>
      <div className="flex text-white  mb-2">
        <p className="font-bold">Anime</p>
        <p className="ml-auto">Coming soon</p>
      </div>
      <div className="flex text-white mb-2">
        <p className="font-bold">Manga</p>
        <p className="ml-auto">Coming soon</p>
      </div>
    </div>
  );
};

export default InfoSection;
