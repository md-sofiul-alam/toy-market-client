import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const UpdateToyData = () => {
    const data = useLoaderData();
    const {_id, quantity, description, price } = data;
    useTitle("Update Toy Data")

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const quantity = form.quantity.value;
        const description = form.description.value;
        const price = form.price.value;

        const updatedToy = { quantity, description, price }
        console.log(updatedToy)

        // Send data to the server
        fetch(`https://your-toy.vercel.app/gallery/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset()
            })

    }

    return (
        <div className="bg-blue-50 py-20">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Toy Details</h2>
                <form onSubmit={handleUpdateToy}>
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
                            defaultValue={price}
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
                            defaultValue={quantity}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-32 resize-none"
                            id="description"
                            placeholder="Enter description"
                            name="description"
                            defaultValue={description}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToyData;