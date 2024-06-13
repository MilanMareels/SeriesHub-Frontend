import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const postLogin = async (text: string, password: string) => {
	const response = await axios.post(`${baseUrl}/login`, { text: text, password: password }).catch((error) => {
		return error.response;
	});

	return response.data;
};
