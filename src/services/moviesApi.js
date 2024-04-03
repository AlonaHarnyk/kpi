import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "171aaca622cd75e6df5a814c1d33ccb1";

export const fetchMovies = () => {
  return axios("trending/movie/day", {
    // headers: {
    //   accept: "application/json",
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzFhYWNhNjIyY2Q3NWU2ZGY1YTgxNGMxZDMzY2NiMSIsInN1YiI6IjVlMTUxYmQ5MDI4ZjE0MDAxM2NmOWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tQ3Gu6Hlkc9cm8-RSBBXKAHqob-Ns1Q3QSqnkhvO-6s",
    // },
    params: {
      api_key: API_KEY,
    },
  });
};
