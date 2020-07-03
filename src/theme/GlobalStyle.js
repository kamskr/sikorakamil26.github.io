import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,900;1,300&display=swap");
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html{
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem; // happy rems
        font-family: 'Montserrat', sans-serif;
        background-color: rgb(30, 24, 55);
    }

    html, body {
        margin: 0;
        padding: 0;
        display: flex;
    }
`;

export default GlobalStyle;
