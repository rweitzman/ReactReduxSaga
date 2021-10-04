import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #app {
    height: 100%;
    width: 100%;  
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Lato', 'arial', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    p {
        margin: 0;
    }
  }
`;
