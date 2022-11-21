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
        &::-webkit-scrollbar
        {
            display: none;
        }
    }

    @font-face {
        font-family: 'YComputer';
        src: url(../../assets/font/Ycomputer.woff) format('woff');
    }
    
    ::-webkit-scrollbar-thumb{
        background-color: black;
    }

    body{
        overflow-x: hidden;
        header{
            transition: all .36s ease-in-out;
            *{
                transition: all .36s ease-in-out
            }
        }
        main{
            transition: all .36s ease-in-out;
            *{
                transition: all .36s ease-in-out
            }
        }
    }
`;

export default GlobalStyle;