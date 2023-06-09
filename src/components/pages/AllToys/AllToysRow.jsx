import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
    const { _id, subCategory, price, toyName, quantity, sellerName } = toy;
    return (
        <tr>
            <td>{sellerName && sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toyDetails/${_id}`} className="btn btn-primary"> View Details </Link></td>
        </tr>
    );
};

export default AllToysRow;