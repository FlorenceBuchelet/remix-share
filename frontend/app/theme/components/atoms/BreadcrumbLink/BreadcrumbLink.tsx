import "./BreadcrumbLink.scss";

interface LinkProps {
    address: string;
    title: string;
}

function Link({ address, title}: LinkProps) {
    return ( 
        <a href={address} className="link">{title}</a>
    );
}

export default Link;