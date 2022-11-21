import ModeToggle from './inner/modeToggle';
import { Head } from '../../style/SHead/SHead';

const Header = () => {
    return(
        <Head>
            <div className="innerHeader">
                <a href="/" className="Logo">Kim. HM</a>
                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Education</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Career</a></li>
                        <li><a href="/">Awards</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
                <ModeToggle />
            </div>
        </Head>
    )
}

export default Header;