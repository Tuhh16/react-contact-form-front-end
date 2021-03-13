import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background-color: #3786bd;
    }
`;

export default GlobalStyle