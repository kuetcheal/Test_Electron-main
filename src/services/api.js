import axios from 'axios';

const API_URL = 'https://api-developers.spinalcom.com/api/v1/';

export const getSpaces = () => {
  return axios.get(`${API_URL}geographicContext/space`);
};

export const getRoomControlEndpoints = (roomId) => {
  return axios.get(`${API_URL}room/${roomId}/control_endpoint_list`);
};
