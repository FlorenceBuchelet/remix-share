import "./Breadcrumb.scss";
import BreadcrumbLink from "../../atoms/BreadcrumbLink/BreadcrumbLink";


function Breadcrumb() {
    return (
        <nav className="breadcrumb">
            <BreadcrumbLink address="" title="New" />
            <BreadcrumbLink address="" title="Current" />
            <BreadcrumbLink address="" title="Old" />
        </nav>
    );
}

export default Breadcrumb;