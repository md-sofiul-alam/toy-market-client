import { Link } from "react-router-dom";

const ToyRow = ({ toy, handleDelete }) => {
    console.log(toy)
    const { _id, imageUrl, toyName, price, subCategory, quantity } = toy;
    return (
        <tr>
            <th>
                <button className="btn btn-sm btn-circle" onClick={() => handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {imageUrl && <img src={imageUrl} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td className="text-xl font-bold">{toyName}</td>
            <td className="text-xl font-bold">{subCategory}</td>
            <td className="text-xl font-bold">{quantity}</td>
            <td className="text-xl font-bold">Tk. {price}</td>
            <th>
                <Link to={`/updateToyData/${_id}`}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3v4a1 1 0 0 0 1 1h4M18.4 3.6a2 2 0 0 1 2.83 0l.57.57a2 2 0 0 1 0 2.83L12 21l-4-4L18.4 3.6z" />
                    </svg>
                </Link>
            </th>
        </tr>
    );
};

export default ToyRow;