import axios from "axios";
import { API_KEY } from "./Config";

axios.defaults.baseURL = `
https://api.themoviedb.org/3/genre/movie/list`;

axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

export default axios;
