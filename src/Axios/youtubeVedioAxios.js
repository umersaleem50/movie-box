import axios from "axios";
import { BASE_URL_VIDEO_URL } from "./Config";

const youtubeVedioAxios = axios.create({ baseURL: BASE_URL_VIDEO_URL });

export default youtubeVedioAxios;
