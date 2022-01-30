const API_KEY = `9bafd59e89eb76ccdff3c1ef06563c45`;
const BASE_URL_IMG = "https://image.tmdb.org/t/p/original";
const BASE_URL_IMG_500 = "https://image.tmdb.org/t/p/original";
const params = {
  api_key: API_KEY,
  language: "en-US",
  page: "1",
  adult: "false",
};

const MOVIE_BOX_PROPS = {
  poster_path: "",
  release_date: "",
  title: "",
  vote_average: "",
  genres: "",
};

// console.log(params.language);

export { API_KEY, params, BASE_URL_IMG, MOVIE_BOX_PROPS, BASE_URL_IMG_500 };
