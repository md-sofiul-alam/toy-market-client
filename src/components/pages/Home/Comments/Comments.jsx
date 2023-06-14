import Marquee from "react-fast-marquee";
import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "Abubakker",
        description: "This seller is too sincere. I have got What I wanted",
        imageSrc: "https://atlas-content-cdn.pixelsquid.com/stock-images/toy-racecar-race-car-track-v1QzdlA-600.jpg",
    },
    {
        id: 2,
        name: "Rahmat Ali",
        description: "I had never thought of this car within this price and this is really original cast-iron",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBVQJPZRMKOx8ZBScocluDvQmbT4WRe8ibQ&usqp=CAU",
    },
    {
        id: 3,
        name: "Rhaim Uddin",
        description: "Great experience with this company. Prompt communication and professional service.",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVJYn4H1f4BAHm4tQGJQ5IzSNtTicOstfkg&usqp=CAU",
    },
    {
        id: 3,
        name: "Khalil Uddin",
        description: "Just Amazing, Nothing to else!",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uzwaKmptXAWXcxnVlnCKP6gX2QZczbOO_thltn8AImiyF0XuM-Koo8Asew6m-a6UD0U&usqp=CAU",
    }
];


const Comments = () => {
    return (
        <div className="bg-emerald-200 py-20">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Client Comments</h2>
            <Marquee>
            {comments.map(comment => <Comment
                    key={comment.id}
                    comment={comment}
                />
                )}
            </Marquee>
        </div>
    );
};

export default Comments;