import Button from "../../atoms/Button/Button";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./SearchBar.scss";

function SearchBar() {
    return (
        <nav className="searchBar">
            <SearchInput />
            <Button />
        </nav>
    );
}

export default SearchBar;