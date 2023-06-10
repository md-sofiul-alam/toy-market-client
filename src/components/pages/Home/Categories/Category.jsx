import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Category = ({ toy }) => {
    const { _id, toyName, price, rating, imageUrl } = toy;
    const { user } = useContext(AuthContext);

    const handleDetail = () => {
        { !user && alert("You have to log in first to view details."); }
    }
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure className="p-4 h-72"><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body bg-blue-100">
                <h2 className="card-title">Toy name: <span className='text-green-600 font-bold'>{toyName}</span></h2>
                <div className="text-xl flex justify-between my-4">
                    <span>Rating: {rating}</span>
                    <span className="font-bold text-primary">Price: {price} Tk.</span>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDetail} className="btn btn-primary">
                        <Link to={`/toyDetails/${_id}`} className="btn btn-primary"> View Details </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;