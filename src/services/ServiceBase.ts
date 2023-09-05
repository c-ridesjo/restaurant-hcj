import axios from 'axios';

const BASE_URL = 'https://school-restaurant-api.azurewebsites.net/';

export const get = async <T>(endpoint: string) => {
	const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
	return response.data;
};
