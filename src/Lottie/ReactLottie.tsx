import { Player } from '@lottiefiles/react-lottie-player'

import OptionalData1 from './json/REC.json';
import OptionalData2 from './json/Digital.json';

export function RedDot() {
    return (
        <Player
          autoplay
          loop
          src={OptionalData1}
        />
    );
}

export function Digital() {
    return (
        <Player
          autoplay
          loop
          src={OptionalData2}
        />
    );
}