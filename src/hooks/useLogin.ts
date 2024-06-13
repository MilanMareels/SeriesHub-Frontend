import { LoginError, LoginResponse, postLogin } from "@/services/users/login";

const useLogin = () => {
	const loginUser = async (text: string, password: string): Promise<LoginResponse | LoginError> => {
		const response = await postLogin(text, password);
		return response;
	};

	return {
		loginUser
	};
};

export default useLogin;
