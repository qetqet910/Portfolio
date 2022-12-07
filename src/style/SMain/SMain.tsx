import Styled from 'styled-components'

export const MainS = Styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.BaseColor};
`

export const RecSVGS = Styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform: scale(.7);
    opacity: .75;
    animation: idenfier 2s ease-in-out;
    @keyframes idenfier{
        0%{
            transform: scale(.8);
            opacity: 0;
            filter: blur(10px)
        }
        8%{opacity: .75;}
        10%{opacity: 0;}
        11%{opacity: .75;}
        12%{opacity: 0;}
        13%{opacity: .75;}
        22%{opacity: 0;}
        100%{
            transform: scale(.7);
            opacity: .75;
            filter: blur(0px)
        }
    }
    svg{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        z-index: 11;
        transform: translate(-50%, -50%);
    }
    .lf-player-container{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        div{
            position: relative;
            width: 100%;
            height: 100%;
            svg{
                position: absolute;
                left: 12%;
                top: 8.4%;
                width: 10% !important;
                height: fit-content !important;
                z-index: 11;
                transform: translate(-50%, -50%);
            }
        }
    }
    section{
            div{
                div{
                    svg{
                        top: 6.7% !important;
                        transform: scale(.84) !important;
                        &:nth-child(1){left: 20% !important;}
                        &:nth-child(2){left: 22% !important;}
                        &:nth-child(3){left: 26% !important;}
                        &:nth-child(4){left: 28% !important;}
                        &:nth-child(5){left: 32% !important;}
                        &:nth-child(6){left: 34% !important;}
                        g{
                            g{
                                g{
                                    path{
                                        fill: rgb(255, 255, 255)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
`