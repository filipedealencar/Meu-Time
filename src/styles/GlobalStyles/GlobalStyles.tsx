import { createGlobalStyle } from "styled-components";
import { Open_Sans, Montserrat } from "next/font/google";

export const OpenSans = Open_Sans({
  weight: "700",
  subsets: ["latin"],
});
export const MontSerrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const GlobalStyle = createGlobalStyle`



  body {
    background: radial-gradient(farthest-side ellipse at 10% 0,#333867 20%,#17193b);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    color: #8ea2ab;
    font-family:${OpenSans.style.fontFamily};
    font-size: .875rem;
    line-height: 20px;
    margin: 0
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-family: ${MontSerrat.style.fontFamily};
    font-weight: 700;}
`;

export default GlobalStyle;
