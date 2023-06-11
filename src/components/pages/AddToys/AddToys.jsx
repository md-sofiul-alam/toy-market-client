import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider"
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const AddToys = () => {
    const { user } = useContext(AuthContext);
    useTitle("Add Toys")

    const handleAdd = (event) => {
        event.preventDefault();

        const form = event.target;
        // console.log(event.target.value)
        const imageUrl = form.imageUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toy = {
            imageUrl,
            toyName,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description
        };
        console.log(toy)
        fetch('https://your-toy.vercel.app/gallery', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy saved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })


    }

    return (
        <div className="bg-blue-100 py-10">
            <div className="max-w-md mx-auto shadow-xl p-5 rounded-2xl">
                <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Add a Toy</h2>
                <form onSubmit={handleAdd}>
                    <div className="flex gap-4">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                    Image URL
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="imageUrl"
                                    type="text"
                                    placeholder="Enter image URL"
                                    name="imageUrl"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toyName">
                                    Toy name
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="toyName"
                                    type="text"
                                    placeholder="Enter toy car name"
                                    name="toyName"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
                                    Seller Name
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="sellerName"
                                    type="text"
                                    placeholder="Enter seller name"
                                    name="sellerName"
                                    defaultValue={user && user?.displayName}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">
                                    Seller Email
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="sellerEmail"
                                    type="email"
                                    placeholder="Enter seller email"
                                    name="sellerEmail"
                                    defaultValue={user && user?.email}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                                    Sub-category
                                </label>
                                <select
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    name="subCategory"
                                    id="subCategory"
                                >
                                    <option value="Regular">Regular</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Police">Police</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="price"
                                    type="number"
                                    placeholder="Enter price"
                                    name="price"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Rating
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="rating"
                                    type="number"
                                    placeholder="Enter rating"
                                    name="rating"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                                    Available Quantity
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="quantity"
                                    type="number"
                                    placeholder="Enter available quantity"
                                    name="quantity"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Detail Description
                        </label>
                        <textarea
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-32 resize-none"
                            id="description"
                            placeholder="Enter detail description"
                            name="description"
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToys;