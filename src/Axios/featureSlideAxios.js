import axios from "axios";
import { API_KEY } from "./Config";

axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/popular`;

axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
  page: "1",
};

export default axios;
