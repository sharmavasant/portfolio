import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial, sans-serif';
    background-color: #f4f4f4;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
