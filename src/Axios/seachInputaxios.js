import axios from "axios";
import { BASE_URL_SEARCH_BAR, params } from "./Config";
// axios.defaults.baseURL = `https://api.themoviedb.org/3/search/`;

const searchAxios = axios.create({
  params: params,
  baseURL: BASE_URL_SEARCH_BAR,
});

export default searchAxios;
