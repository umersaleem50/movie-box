import axios from "axios";
import { API_KEY, BASE_URL_VIDEO_URL } from "./Config";

const castAxios = (id) =>
  axios.create({
    baseURL: BASE_URL_VIDEO_URL + id,
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });

export default castAxios;
