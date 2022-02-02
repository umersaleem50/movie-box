import axios from "axios";
import { API_KEY, BASE_URL_POPULAR_MOVIES } from "./Config";

const params = {
  api_key: API_KEY,
  language: "en-US",
  page: "1",
};

const newAxios = axios.create({
  params: { ...params },
  baseURL: BASE_URL_POPULAR_MOVIES,
});

export default newAxios;
