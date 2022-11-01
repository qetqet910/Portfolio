import { useEffect } from 'react'

export default function LottieClickEvent(){
    useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    });
    return(
        <lottie-interactive path="./lottie/404Lottie.json" interaction="click"></lottie-interactive>
    )
}