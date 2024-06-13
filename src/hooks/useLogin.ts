import { postLogin } from "@/services/users/login";

const useLogin = () => {
	const loginUser = async (text: string, password: string) => {
		const response = await postLogin(text, password);
		return response;
	};

	return {
		loginUser
	};
};

export default useLogin;
