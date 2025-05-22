import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";

import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getTrending,
  getTrendingPeople,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [TrendingPeople, setTrendingPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAlldata() {
      Promise.all([getMovies(), getTopMovies(), getTopSeries(), getTrending(), getTrendingPeople()])
        .then(([movies, topMovies, topSeries, Trending, TrendingPeople]) => {
          setMovies(movies);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setTrending(Trending);
          setTrendingPeople(TrendingPeople);
        })
        .catch((error) => console.error(error));
    }

    getAlldata();
  }, []);

  return (
    <>
      {movies && (
        <Background $img={getImages(movies.backdrop_path)}>
          {showModal && <Modal movieId={movies.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movies.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)} setShowModal={setShowModal}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movies.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top-Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top-Series"} />}
      {Trending && <Slider info={Trending} title={"Trending"} />}
      {TrendingPeople && <Slider info={TrendingPeople} title={"Artistas em alta"} />}
    </>
  );
}

export default Home;

//https://image.tmdb.org/t/p/original/
