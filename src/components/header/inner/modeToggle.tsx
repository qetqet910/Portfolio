import { useSetRecoilState } from 'recoil'
import { isDarkAtom } from '../../../recoil/atom';

const ModeToggle = () => {
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDark = () => setDarkAtom ((prev) => !prev);

    return(
        <div onClick={toggleDark}>다크 모드</div>
    )
}

export default ModeToggle;