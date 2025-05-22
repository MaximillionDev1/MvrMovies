import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b6ba499bffe54ba0831e611133819353",
    language: "pt-Br",
    page: 1,
  },
});

export default api;
