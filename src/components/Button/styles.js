import styled, { css } from "styled-components";

const buttonStyles = css`
border: 3px solid #fff;
background:transparent;
color: #fff;
border-radius:30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.3s ease-in-out;
margin: 0 10px;

&:hover {
    background: #fff;
    color: #ff0000;
    transform: scale(1.1);
    
}
`;

export const ButtonWhite = styled.button`
${buttonStyles}
`;

export const ButtonRed = styled.button`
${buttonStyles}

background: #ff0000 ;
border: 4px solid transparent;
box-shadow:0px 0px 7px 8px rgb(255,0 ,0 , 30%) ;

&:hover {
box-shadow:0px 0px 7px 15px rgb(255,0 ,0 , 30%) ;
    background:#ff0000;
    color:#fff
}

`;
