import ErrorComponent from "@/components/error/ErrorComponent";
import InfoSection from "@/components/profilePage/infoSection";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import { AuthContext } from "@/contexts/AuthContext";
import useUser from "@/hooks/useUser";
import { useContext } from "react";

function ProfilePage() {
  const { userId } = useContext(AuthContext);

  const { user, isError, isLoading, error } = useUser(userId);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col justify-center items-center border-solid border-2 border-white w-[80%] p-5">
        <h1 className="text-2xl text-white font-bold mb-4">AnimeFan</h1>
        <img
          src="https://i.pinimg.com/736x/48/a4/d8/48a4d8c9d2debc2fc27532fd53eb6913.jpg"
          alt="profile-pic"
          className="w-[250px] h-[250px] rounded-full"
        />
        <Button className="mt-4 bg-[#1B1A55] text-white" disabled>
          Add friend
        </Button>
      </div>

      <InfoSection user={user!} />
    </div>
  );
}

export default ProfilePage;
