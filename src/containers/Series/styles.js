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
padding-top: 30px;

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

