import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 20px;
  gap: 10px;
  animation: ${fadeIn} 0.6s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  flex: 1;
  color: #fff;

  h1 {
    font-size: 48px;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Poster = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    animation: ${fadeIn} 0.6s ease-in-out;
  }
`;
