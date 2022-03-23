import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-primary: #000000;
        --clr-secondary: #ddd;
        --clr-font: #111111;
        --clr-borders: #eee;
        --clr-button-primary-text: #ffffff;
        --clr-button-secondary-text: #000000;

        --borders: 1px solid var(--clr-borders);
        --border-radius: 5px;
        --box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);
        --box-shadow-small: 0px 0px 10px 0px rgba(0,0,0,0.1);

        --header-height: 60px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    } 

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Poppins, sans-serif;
        color: var(--clr-font);
        background-color: #fafafa;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .icon {
        color: var(--clr-font);
    }
`;

export default GlobalStyle;
