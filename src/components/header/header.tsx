import { Link } from 'react-router-dom';
import ModeToggle from './inner/modeToggle';

const Header = () => {
    return(
        <header>
            <Link to="#" className="Logo">Kim. HM</Link>
            <nav>
                <ul>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Edu</Link></li>
                    <li><Link to="#">Car</Link></li>
                    <li><Link to="#">ETC</Link></li>
                    <li><Link to="#">ETc</Link></li>
                    <li><Link to="#">Exa</Link></li>
                </ul>
            </nav>
            <ModeToggle />
        </header>
    )
}

export default Header;