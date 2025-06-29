import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
transform: scale(0);}
to {
transform: scale(1);}
`;

export const Background = styled.div`
 background-image: url(${(props) => props.$img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

&::before {
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
}

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-image: linear-gradient(to top , rgba( 0 ,0 ,0 , 0.8) , rgba( 0 ,0 ,0 , 0));
}


`;

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;
`;

export const Info = styled.div`
z-index: 2;
padding: 20px;
width:50%;

h1 {
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

p{
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
}
`;

export const Poster = styled.div`
z-index: 2;
img{
  width:400px;
  border-radius:30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  animation: ${scale} 0.6s linear;
  

}
`;

export const ContainerButtons = styled.div`
display: flex;
`;
