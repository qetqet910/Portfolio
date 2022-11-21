import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isDarkAtom } from '../../../recoil/atom';
import { useLayoutEffect } from 'react';

const ModeToggle = () => {
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const Option = useRecoilValue(isDarkAtom);

    const toggleDark = () => {
        setDarkAtom ((prev) => !prev);
        if(Option === false) localStorage.setItem("theme", "Dark");
        else localStorage.setItem("theme", "Light");
    }

    useLayoutEffect(() => {
        if(localStorage.getItem('theme') === "Dark"){
            setDarkAtom ((prev) => prev = true);
        }
    }, [setDarkAtom])

    return(
        <div onClick={toggleDark} className="Toggle">다크 모드</div>
    )
}

export default ModeToggle;