import axios from "axios";
import { API_KEY, BASE_URL_UPCOMING_MOVIES } from "./Config";

const params = {
  api_key: API_KEY,
  language: "en-US",
};
const newAxios = axios.create({
  params: { ...params },
  baseURL: BASE_URL_UPCOMING_MOVIES,
});

export default newAxios;
