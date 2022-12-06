import { ReactComponent as Reservation } from "../../../assets/svg/view.svg";

import { RecSVGS } from "../../../style/SMain/SMain";
import { RedDot, Digital } from "../../../Lottie/ReactLottie";

export const RecSVG = () => {
    return(
        <RecSVGS>
            <Reservation />
            <RedDot />
            <section>
                <Digital />
                <Digital />
                <Digital />
                <Digital />
                <Digital />
                <Digital />
            </section>
        </RecSVGS>
    )
}