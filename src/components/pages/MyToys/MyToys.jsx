import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    useTitle("My Toys")


    const url = `https://your-toy.vercel.app/gallery?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const myToys = data.filter(myToy => myToy?.sellerEmail === user?.email);
                setToys(myToys)
            })
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://your-toy.vercel.app/gallery/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(booking => booking._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div className='mb-20'>
            <h2 className="text-5xl font-bold text-primary text-center my-10">My Toys</h2>
            <div className="overflow-x-auto w-full navbar max-w-6xl mx-auto lg:px-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-red-500">Delete</th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys?.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;