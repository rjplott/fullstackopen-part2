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

const numberServices = {
  getNumbers,
  addNumber,
};

export default numberServices;
