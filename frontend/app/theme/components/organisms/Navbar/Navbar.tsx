import Logins from "../../atoms/Logins/Logins";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../atoms/Menu/Menu";
import MainTitle from "../../atoms/Titles/Main/MainTitle";
import "./Navbar.scss";

//  nav : logo, titre, log in, subscribe, menu (stats, calendrier)

function Navbar() {
    return (
        <nav className="nav">
            <Logo />
            <MainTitle title="Lorem Ipsum" />
            <span className="nav nav__sub">
                <Logins />
                <Menu />
            </span>
        </nav>
    );
}

export default Navbar;