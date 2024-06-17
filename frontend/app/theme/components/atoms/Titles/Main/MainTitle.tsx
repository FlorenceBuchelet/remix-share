import "./MainTitle.scss";

interface MainTitleProps {
    title: string;
}

function MainTitle({ title }: MainTitleProps) {
    return ( <h1 className="mainTitle">{title}</h1> );
}

export default MainTitle;