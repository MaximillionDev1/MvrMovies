import { getImages } from "../../utils/getImages";
import { Container, Info, Poster, ContainerButtons } from "./styles";
import Button from "../Button";
import Modal from "../Modal";
import { useState } from "react";

function CardDestaque({ item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal movieId={item.id} setShowModal={setShowModal} />}

      <Container>
        <Info>
            <h2>Em Cartaz :</h2>
          <h1>{item.title}</h1>
          <p>{item.overview}</p>
          <ContainerButtons>
            <Button onClick={() => setShowModal(true)}>
              Assista o Trailer
            </Button>
          </ContainerButtons>
        </Info>

        <Poster>
          <img src={getImages(item.poster_path)} alt={`Poster de ${item.title}`} />
        </Poster>
      </Container>
    </>
  );
}

export default CardDestaque;
