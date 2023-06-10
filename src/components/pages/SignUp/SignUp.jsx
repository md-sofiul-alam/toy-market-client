import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";


const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, signInGoogle, updateUser } = useContext(AuthContext);
    useTitle("Sign Up")
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.url.value;

        createUser(email, password)
            .then(result => {
                setError('')
                const user = result.user;
                console.log(user)
                form.reset()
                updateUser(result.user, name, url)
            })
            .catch(error => {
                setError(error.message)
            })
        updateUser(name, url)
            .then(() => { })
            .catch(error => setError(error.message))
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="md:text-4xl text-2xl text-blue-600 text-center font-semibold mb-6">Sign Up</h2>
                <p className='error-text'>{error}</p>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <input
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            id="photoUrl"
                            type="text"
                            name="url"
                            placeholder="Enter the photo URL"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <p>Have An Account? <Link className="text-blue-500 font-medium text-lg hover:underline" to='/login'>
                            Login
                        </Link></p>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <span className="text-gray-600 mr-2">Or sign up with:</span>
                        <button
                            className="flex items-center bg-white border border-gray-300 rounded-md p-2 shadow-sm hover:shadow-md"
                            type="button"
                        >
                            <svg className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M21.35 9.5H12v3.8h4.3c-.2 1-.8 2-1.7 2.6v2.2h2.8c1.6-1.5 2.5-3.6 2.5-6.1s-.9-4.5-2.6-6l-2.7 2.1C17.4 4.3 19 6.7 19 9.5h2.35z"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M12 21c-1.8 0-3.3-.6-4.5-1.7L4 21l1.2-3.6C3.6 15.5 3 13.6 3 11.5s.6-4 2.2-5.4L4 2h6v2H6.6C4.9 4 3.5 6 3.5 8.2S4.9 12.5 6.6 13h5.8c1.7 0 3.1 1.9 3.1 4.1S14,16.9 14,19 16 17.3 16 15.5 16h-2.35z"></path>
                            </svg>
                            <span onClick={handleGoogleSignIn} className="text-gray-600">Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;