import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-primary: #000000;
        --clr-secondary: #cccccc;
        --clr-font: #111111;
        --clr-button-text: #ffffff;

        --border-radius: 5px;
        --box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);

        --header-height: 40px;
    }

    body {
        font-family: Poppins, sans-serif;
        color: var(--clr-font);
        background-color: #fafafa;
    }

    .icon {
        color: var(--clr-font);
    }
`;

export default GlobalStyle;
