import { createGlobalStyle } from "styled-components";


export default createGlobalStyle `
* {
margin:0;
padding:0;
box-sizing:border-box;
outline:none;
text-decoration:none;
font-family: "Montserrat", sans-serif;
}

body {
min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg,#090718,#211e4b, #FFD700);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
 

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
}

`

