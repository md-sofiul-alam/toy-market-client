import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';

const ToyDetails = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    useTitle("Toy Details")

    const { description, imageUrl, price, quantity, rating, sellerEmail, sellerName, subCategory, toyName } = details;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toy = { name, email, imageUrl, toyName, price, subCategory, quantity, description, sellerName};
        console.log(toy);

        // Send data to server
        fetch('https://your-toy.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Toy has been saved',
                        showConfirmButton: true
                    })
                }
            })
    }

    return (
        <div className='bg-blue-50 py-20'>
            <div className="max-w-2xl lg:max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                    <img className="w-32 h-32 rounded-full mr-4" src={imageUrl} alt={toyName} />
                    <h2 className="text-3xl font-bold">{toyName}</h2>
                </div>
                <div className='flex gap-6'>
                    <div className='w-1/2'>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Category:</span> {subCategory}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Seller Name:</span> {sellerName}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Seller Email:</span>{sellerEmail}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Description:</span> {description}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Price: $</span>{price}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Quantity:</span> {quantity}</p>
                        <p className="text-gray-600 mb-2"><span className='font-bold mr-3'>Ratings:</span> {rating}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="mb-4 appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                id="name"
                                type="text"
                                placeholder="Write your name"
                                name="name"
                                required
                                defaultValue={user?.displayName}
                            />
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                className="mb-4 appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                id="email"
                                type="email"
                                placeholder="Write your email"
                                name="email"
                                required
                                defaultValue={user?.email}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Choose My Toy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;