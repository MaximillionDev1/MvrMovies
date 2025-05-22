import { useEffect, useState } from "react";
import {
  getMovieOnDisplay,
  getMovies,
  getMovieUpcoming,
  getTopMovies,
} from "../../services/getData";
import { Background } from "./styles";

import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import SliderDestaque from "../../components/SliderDestaque";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [moviesOnDisplay, setMoviesOnDisplay] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  console.log(moviesOnDisplay);

  useEffect(() => {
    async function getAlldata() {
      Promise.all([getMovies(), getMovieOnDisplay(), getMovieUpcoming(), getTopMovies()])
        .then(([movies, onDisplay, Upcoming, topMovies]) => {
          setMovies(movies);
          setMoviesOnDisplay(onDisplay);
          setMoviesUpcoming(Upcoming);
          setTopMovies(topMovies);
        })
        .catch((error) => console.error(error));
    }

    getAlldata();
  }, []);

  return (
    <>
      {movies && (
        <Background $img={getImages(movies.backdrop_path)}>
          {moviesOnDisplay && <SliderDestaque info={moviesOnDisplay} />}
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top-Filmes"} />}
      {moviesUpcoming && <Slider info={moviesUpcoming} title={"Em breve"} />}
    </>
  );
}

export default Movies;

