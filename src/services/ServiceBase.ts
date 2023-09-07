import axios from 'axios';

const BASE_URL = 'https://school-restaurant-api.azurewebsites.net/';

export const get = async <T>(endpoint: string) => {
	const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
	return response.data;
};

export const post1 = async <T>(endpoint: string, postMsg: unknown) => {
	const response = await axios.post<T>(`${BASE_URL}${endpoint}`, postMsg);
	return response.data;
};

export const post = async (endpoint: string, postMsg: unknown) => {
	const response = await axios.post(`${BASE_URL}${endpoint}`, postMsg);
	return response.data;
};

export const put = async (endpoint: string, putMsg: unknown) => {
	const response = await axios.put(`${BASE_URL}${endpoint}`, putMsg);
	return response.data;
};

export const remove = async (endpoint: string) => {
	const response = await axios.delete(`${BASE_URL}${endpoint}`);
	return response.data;
};