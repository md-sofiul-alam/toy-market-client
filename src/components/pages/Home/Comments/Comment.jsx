

const Comment = ({comment}) => {
    const { name, description, imageSrc } = comment;
    return (
        
            <div className="bg-white w-4/5 mx-5 rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                    <img className="w-36 h-36 block mx-auto rounded-full" src={imageSrc} alt={name} />
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-gray-600">Client</p>
                    </div>
                </div>
                <p className="text-gray-700 w-1/2 mx-auto">{description}</p>
            </div>

    );
};

export default Comment;