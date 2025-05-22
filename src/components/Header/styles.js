import styled from "styled-components";

export const Container = styled.div`

z-index: 3;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
min-height:80px;
width: 100%;
padding: 7px 20px;
background-color: ${(props) => (props.$changeBackground ? "#211e4b" : "transparent")};
transition: background-color 0.4s ease-out;

img{
    width:18%;
}
`;

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;
`;

export const Li = styled.li`
display: flex;
font-weight: 600;
cursor: pointer;
gap: 30px;
font-size: 28px;
position: relative;

a {
    text-decoration: none;
    color: #fff;
    transition: transform 0.4s;
    

    &:after {
        content: "";
        height: 3px;
        width: ${(props) => (props.$isActive ? "100%" : "0")};
        background-color: #FFD700;
        position: absolute;
        bottom: -10px;
        left:50%;
        transform: translateX(-50%);
        transition: width 0.4s ease-in-out;
        
    }
    &:hover::after {
        width: 100%;
        
    }
}
`;
