// 자동실행 로티

import lottie from 'lottie-web';
import { useEffect } from 'react';

import * as Lottie1Animation from './json/lf20_w51pcehl.json';

export const Lottie1 = () => {
    const container1 = document?.querySelector('#Lottie1')

    useEffect(() => {
    if(container1 == null) return;

        lottie.loadAnimation({
            container: container1,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Lottie1Animation 
        })
    }, [])

    return(
        <div id='Lottie1'>

        </div>
    )
}
