/**
 * Découpage Home
 * - body : barre de recherche, grid exo
 * - footer dynamique : jour courant, total
 * - footer : (c), lien GH
 */

import "./Home.scss";
import Navbar from "~/theme/components/organisms/Navbar/Navbar";
import SearchBar from "~/theme/components/molecules/SearchBar/SearchBar";
import Breadcrumb from "~/theme/components/molecules/Breadcrumb/Breadcrumb";
import Grid from "~/theme/layouts/Grid/Grid";

function Home() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Breadcrumb />
                <SearchBar />
                <Grid />
            </main>
        </>
    );
}

export default Home;