import logo from '../../assets/img/logo.svg';
import github from '../../assets/img/github.svg';
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img className="dsmeta-logo-container-img" src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <img className="git-logo-white" src={github} alt="" />
                    <a href="https://github.com/heus-N">/heus-N</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
