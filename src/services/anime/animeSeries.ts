import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getAnimeSeries = async (userId: string) => {
	const response = await axios.get(`${baseUrl}/user/${userId}/AnimeSeries?page=1&listStatus=1`);

	return response.data;
};
