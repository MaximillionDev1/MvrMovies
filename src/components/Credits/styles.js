import styled from "styled-components";

export const Title = styled.h3`
color: #fff;
font-size: 28px;
font-weight: 700;

`;

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 13px;

div {
display: flex;
flex-direction: column;
}

img{
height: 230px;
border-radius: 26px;

&:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
}

}

p{
color: #fff;
}

`;
