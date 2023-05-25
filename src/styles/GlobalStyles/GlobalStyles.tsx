import { createGlobalStyle } from "styled-components";
// import { Open_Sans, Montserrat } from "next/font/google";
const GlobalStyle = createGlobalStyle`



  body {

    @font-face {
    font-family: 'Montserrat';
    src:  url("../../../public/fonts/Montserrat.ttf") format('truetype');
  }
    @font-face {
    font-family: 'OpenSans';
    src:  url("../../../public/fonts/OpenSans.ttf") format('truetype');
  }
    @font-face {
    font-family: 'VikingStencil';
    src:  url("../../../public/fonts/VikingStencil.ttf") format('truetype');
  }

    background: radial-gradient(farthest-side ellipse at 10% 0,#333867 20%,#17193b);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Montserrat', sans-serif;
    color: #8ea2ab;
    font-size: .875rem;
    line-height: 20px;
    margin: 0
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-weight: 700;}
`;

export default GlobalStyle;
