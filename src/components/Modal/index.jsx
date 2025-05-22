import { useEffect, useState } from "react";
import { Background, Container, CloseButton } from "./styles";

import { CgCloseO } from "react-icons/cg";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovies(await getMovieVideos(movieId));
    }

    getMovies();
  }, [movieId]);
  return (
    <Background onClick={() => setShowModal(false)}>
      {movies && (
        <Container>
          <CloseButton>
            <CgCloseO onClick={() => setShowModal(false)} />
          </CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${movies[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          />
        </Container>
      )}
    </Background>
  );
}

export default Modal;
