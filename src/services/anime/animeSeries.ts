import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getAnimeSeries = async () => {
	const response = await axios.get(`${baseUrl}/user/824ea640-287f-44b1-ba33-1156d048e8b4/AnimeSeries?page=1&listStatus=1`);

	return response.data;
};
