import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import Slider from "../../components/Slider";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);

  useEffect(() => {
    async function getAlldata() {
      Promise.all([getMovieById(id), getMovieVideos(id), getMovieCredits(id), getMovieSimilar(id)])
        .then(([movies, videos, credits, similar]) => {
          setMovie(movies);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }

    getAlldata();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt={`Poster ${movie.title}`} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres}>generos</SpanGenres>
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  />
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && <Slider info={movieSimilar} title={"Similar"} />}
        </>
      )}
    </>
  );
}

export default Details;
