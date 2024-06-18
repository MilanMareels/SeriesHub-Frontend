import axios from "axios";

const baseUrl = process.env.BASE_URL;

export interface LoginResponse {
	userId?: string;
}

export interface LoginError {
	error: true;
	status?: number;
	data?: any;
	message?: string;
	userId?: string;
}

export const postLogin = async (text: string, password: string): Promise<LoginResponse | LoginError> => {
	try {
		const response = await axios.post(`${baseUrl}/login`, { text, password });
		return response.data as LoginResponse;
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			return {
				error: true,
				status: error.response.status,
				data: error.response.data
			};
		} else {
			return {
				error: true,
				message: error.message
			};
		}
	}
};
