

const Comment = ({comment}) => {
    const { name, description, imageSrc } = comment;
    return (
        <div className="carousel-item w-full justify-center text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 ">
                <div className="mb-4">
                    <img className="w-36 h-36 block mx-auto rounded-full" src={imageSrc} alt={name} />
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-gray-600">Client</p>
                    </div>
                </div>
                <p className="text-gray-700 w-1/2 mx-auto">{description}</p>
            </div>
        </div>

    );
};

export default Comment;