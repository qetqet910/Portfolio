// 이벤트형 로티

import {LottieInteractivity} from '@lottiefiles/lottie-interactivity';
// import { useEffect } from 'react';

// useEffect(() => {
//     import("@lottiefiles/lottie-player");
// }, [])

LottieInteractivity.create({
    player:'#AniLottie1',
    mode:"scroll",
    actions: [
        {
            visibility:[0, 1.0],
            type: "seek",
            frames: [0, 300],
            path: 'https://assets10.lottiefiles.com/private_files/lf30_rsqq11m6.json',
        },
    ]
});

export const EventLottie1 = () => {
    return(
        // <lottie-player
        //     id="AniLottie1"
        //     mode="normal"
        //     src="../lottie/toggle.json"
        // ></lottie-player>
        <></>
    )
}