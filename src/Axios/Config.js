/*
THESE ARE THE CONFIGRATIONS FOR APP
*/
const API_KEY = `9bafd59e89eb76ccdff3c1ef06563c45`;
const BASE_URL_IMG = "https://image.tmdb.org/t/p/original";
const BASE_URL_IMG_500 = "https://image.tmdb.org/t/p/original";
const BASE_URL_UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/top_rated";
const BASE_URL_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular";
const BASE_URL_SEARCH_BAR = "https://api.themoviedb.org/3/search/";
const BASE_URL_VIDEO_URL = `https://api.themoviedb.org/3/movie/`;

/*
THESE ARE THE PARAMS FOR SEARCH_BAR AXIOS OBJECT.
AXIOS IS FOR FATCHING DATA FROM SERVER
*/

const params = {
  api_key: API_KEY,
  language: "en-US",
  page: "1",
  adult: "false",
};

const VideosParams = {
  api_key: API_KEY,
  language: "en-US",
};

const CastParams = {
  profile_path: "",
  name: "",
};

/*
Slider function takes props arugment to compare it will response data 
& add it to child components of the slider component,

THIS OBJECT ARE THE PROPS OF SINGLE MOVIEBOX COMPONENT
*/

const MOVIE_BOX_PROPS = {
  poster_path: "",
  release_date: "",
  title: "",
  vote_average: "",
  genre_ids: "",
};

const VIDEO_ELEMENT_PROPS = {
  ImgBox: "",
  backdrop_path: "",
  poster_path: "",
  original_title: "",
  name: "",
  id: "",
  otherKey: "",
};

export {
  API_KEY,
  params,
  BASE_URL_IMG,
  MOVIE_BOX_PROPS,
  BASE_URL_IMG_500,
  BASE_URL_UPCOMING_MOVIES,
  BASE_URL_POPULAR_MOVIES,
  BASE_URL_SEARCH_BAR,
  VIDEO_ELEMENT_PROPS,
  BASE_URL_VIDEO_URL,
  VideosParams,
  CastParams,
};
