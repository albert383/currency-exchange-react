import backgroundImage from './background.png';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

  *,
    ::before,
    ::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        display: grid;
        justify-items: center;
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        height: 100vh;
    }
`;