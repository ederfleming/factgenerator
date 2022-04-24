import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export default API_URL;
