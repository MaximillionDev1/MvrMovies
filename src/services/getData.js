import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results[0];
}
export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}
export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}
export async function getTrending() {
  const {
    data: { results },
  } = await api.get("/trending/all/week");

  return results;
}
export async function getTrendingPeople() {
  const {
    data: { results },
  } = await api.get("/trending/person/day");
  return results;
}

export async function getMovieVideos(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results;
}

export async function getMovieCredits(movieId) {
  const {data: {cast}} = await api.get(`/movie/${movieId}/credits`);

  return cast;
}
export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}
export async function getMovieById(movieId) {
  const {data} = await api.get(`/movie/${movieId}`);

  return data;
}


export async function getMovieOnDisplay() {
  const {
    data: { results },
  } = await api.get("/movie/now_playing");

  return results;
}

export async function getMovieUpcoming() {
  const {
    data: { results },
  } = await api.get("/movie/upcoming");

  return results;
}

export async function getSerieOnair() {
  const {
    data: { results },
  } = await api.get("/tv/on_the_air");
   return results;
}

export async function getSerieToday() {
  const {
    data: { results },
  } = await api.get("/tv/airing_today");
   return results;
}

export async function getSeriePopular() {
  const {
    data: { results },
  } = await api.get("/tv/popular");
   return results;
}