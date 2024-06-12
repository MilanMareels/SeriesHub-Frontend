import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getAnimeSeries = async () => {
	const response = await axios.get(`${baseUrl}/animeSeries`);

	return response.data;
};
