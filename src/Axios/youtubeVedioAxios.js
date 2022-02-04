import axios from "axios";
import { BASE_URL_VIDEO_URL, VideosParams } from "./Config";

const youtubeVedioAxios = (id) =>
  axios.create({
    baseURL: BASE_URL_VIDEO_URL + `${id}`,
    params: { ...VideosParams },
  });

export default youtubeVedioAxios;
