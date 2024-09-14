import ErrorComponent from "@/components/error/ErrorComponent";
import InfoSection from "@/components/profilePage/infoSection";
import TopSection from "@/components/profilePage/topSection";
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
      <TopSection user={user!} />

      <InfoSection user={user!} />
    </div>
  );
}

export default ProfilePage;
