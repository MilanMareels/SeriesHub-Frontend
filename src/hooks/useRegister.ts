import { LoginError, LoginResponse } from "@/services/users/login";
import { postRegister } from "@/services/users/register";

const useRegister = () => {
  const registerUser = async (userName: string, email: string, password: string): Promise<LoginResponse | LoginError> => {
    const response = await postRegister(userName, email, password);
    return response;
  };

  return {
    registerUser,
  };
};

export default useRegister;
