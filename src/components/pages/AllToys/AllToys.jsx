import { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import useTitle from '../../../hooks/useTitle';


const AllToys = () => {
    const [toys, setToys] = useState([])
    useTitle("All Toys")

    const url = 'https://your-toy.vercel.app/gallery'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20)))
    }, [url])

    const handleSearch = (e) => {
        e.preventDefault();

        const searchText = e.target.text.value;
        const searchToy = toys.filter(toy => toy.subCategory == searchText);
        setToys(searchToy)
    }

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-20 md:py-15'>
            <form onSubmit={handleSearch} className="flex items-center justify-center my-10">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;