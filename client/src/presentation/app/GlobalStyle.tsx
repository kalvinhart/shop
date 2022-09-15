import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-primary: #74b9ff;
        --clr-primary-hover: #0984e3;
        --clr-secondary: #a29bfe;
        --clr-secondary-hover: #6c5ce7;
        --clr-font: #111111;
        --clr-borders: #eee;
        --clr-button-text: #ffffff;
        --clr-button-disabled: #b2bec3;

        --borders: 1px solid var(--clr-borders);
        --border-radius: 5px;
        --box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
        --box-shadow-small: none;

        --header-height: 60px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    } 

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Inter, sans-serif;
        color: var(--clr-font);
        background-color: #f7fafc;
    }

    a,
    a:visited {
        color: #111111;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .icon {
        color: var(--clr-font);
    }

    .mobileHidden {
        display: none;
    }
`;

export default GlobalStyle;
