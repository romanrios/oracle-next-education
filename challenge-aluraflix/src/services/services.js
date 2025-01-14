import axios from "axios";

const MOCKAPI_URL = "https://6759e26f099e3090dbe33820.mockapi.io/romanflix";

const apiClient = axios.create({
  baseURL: MOCKAPI_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editData = async (data) => {
  try {
    const response = await apiClient.put(`/${data.id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
