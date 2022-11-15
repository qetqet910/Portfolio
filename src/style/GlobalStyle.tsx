import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    @font-face {
        font-family: 'YComputer';
        src: url(../assets/font/Ycomputer.woff) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyle;