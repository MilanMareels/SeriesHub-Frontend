import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { User } from "@/models/user/User";
import { getUserByUserId } from "@/services/users/getUserByUserId";

const useUser = (userId: string) => {
  const { data, isError, isLoading, error } = useQuery<User, AxiosError>(["user"], () => getUserByUserId(userId));

  return {
    user: data,
    isError,
    isLoading,
    error,
  };
};

export default useUser;
