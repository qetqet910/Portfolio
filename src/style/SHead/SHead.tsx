import Styled from 'styled-components'

export const Head = Styled.header`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 6vh;
    background: ${(props) => props.theme.BgColorA};
    font-weight: ${(props) => props.theme.FontWeight};
    z-index: 999;
    /* font-family: 'YComputer'; */
    a{
        color: ${(props) => props.theme.BaseColor};
    }
    .innerHeader{
        position: relative;
        display: flex;
        justify-content: space-between;        
        align-items: center;
        width: 90%;
        height: 100%;
        nav{
            ul{
                display: flex;
                justfy-content: space-between;        
                align-items: center;
                li{
                    margin: 0 1vw
                }
            }
        }
        .Toggle{
            color: ${(props) => props.theme.BaseColor};
            cursor: pointer;
        }
    }
`