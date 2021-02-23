import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getNumbers = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNumber = (number) => {
  const request = axios.post(baseUrl, number);
  return request.then((response) => response.data);
};

const deleteNumber = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateNumber = (id, number) => {
  const request = axios.put(`${baseUrl}/${id}`, number);
  return request.then((response) => response.data);
};

const numberServices = {
  getNumbers,
  addNumber,
  deleteNumber,
  updateNumber,
};

export default numberServices;
