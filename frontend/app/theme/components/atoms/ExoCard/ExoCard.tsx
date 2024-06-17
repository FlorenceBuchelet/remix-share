import "./ExoCard.scss";

interface ExoCardProps {
    key: number;
    title: string;
    image: string;
}

function ExoCard({ key, title, image }: ExoCardProps) {
    return (
        <>
            <div className="exo" key={key}>
                <h2>{title}</h2>
                <img src={image} alt={`${title}`} />
            </div>
        </>
    );
}

export default ExoCard;