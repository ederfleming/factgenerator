import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

   #root {
    margin: 0 auto;
  }

  body {
    background-color: #333;
    color: #000
  }

  body, input, button {
    font: 14px 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
