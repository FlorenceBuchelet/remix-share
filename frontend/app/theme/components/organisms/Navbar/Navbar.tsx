import Logo from "../../atoms/Titles/Logo/Logo";
import MainTitle from "../../atoms/Titles/Main/MainTitle";
import "./Navbar.scss";

//  nav : logo, titre, log in, subscribe, menu (stats, calendrier)

function Navbar() {
    return (
        <nav className="nav">
            <Logo />
            <MainTitle title="Home" />
        </nav>
    );
}

export default Navbar;