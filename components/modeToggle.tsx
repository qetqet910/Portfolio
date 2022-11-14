import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/common/components/modeToggle.module.scss';

const ModeToggle = () => {
    return (
        <div className={styles.toggle}>
            <FontAwesomeIcon icon={faSun} />
            <div className={styles.pannel}></div>
        </div>
    )
}

export default ModeToggle;