import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index:99;
background: rgba(0, 0, 0, 0.6);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
background:#090718 ;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1280px;
border-radius: 10px;

iframe {
    border: none;
}
`;

export const CloseButton = styled.button`
position: absolute;
top: 20px;
right: 20px;
border:none;
border-radius: 5px;
height: 20px;
width: 20px;
background: #eb3f58
`