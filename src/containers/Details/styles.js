import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
transform: scale(0);}
to {
transform: scale(1);}
`;

export const Background = styled.div`
background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0 ,0 , 0.6);
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
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin-top: -100px;
`;

export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 2;

img {
    width: 500px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.7s linear;
}
`;

export const Info = styled.div`
padding: 20px;
width: 50%;
z-index: 2;
display: flex;
align-items: flex-start;
flex-direction: column;

h2 {
    font-size: 40px;
    color: #fff;
    font-weight: 700;
}

p {
font-size: 24px;
color: #fff;
font-weight: 700;
margin-top: 20px;
margin-bottom: 26px;

}
`;

export const ContainerMovies = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
padding: 20px;
width: 100%;

div{
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 33px 0;
}


iframe {
border: none;
}

h4 {
    color: #fff;
    font-size:20px;
    font-weight: 700;
    margin-bottom: 7px;

}
`;
