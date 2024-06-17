import ExoCard from "~/theme/components/atoms/ExoCard/ExoCard";
import "./Grid.scss";

function Grid() {
    const fakeExercices = [{
        id: 1,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor dolores hui",
    },{
        id: 2,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 3,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 4,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 5,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 6,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 7,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 8,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 9,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 10,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    },{
        id: 11,
        image: "https://placehold.co/400",
        title: "Lorem ipsum dolor",
    }];

    return (
        <span className="grid">
            {fakeExercices && fakeExercices.map((exo) => (
                <ExoCard key={exo.id} title={exo.title} image={exo.image} />
            ))}
        </span>
    );
}

export default Grid;