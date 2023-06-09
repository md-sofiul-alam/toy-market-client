import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const suMessage = <div className="alert alert-success shadow-lg">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your are Login Successful!</span>
    </div>
</div>

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const { signIn, signInGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useTitle("Login")

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // Sign In Email and password
        signIn(email, password)
            .then(result => {
                setError("")
                const user = result.user;
                { user && setSuccess(suMessage) }
                form.reset()
                alert("Login Success")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess("")
                setError(error.message)
            })
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                setError("")
                const user = result.user;
                { user && setSuccess(suMessage) }
                alert("Login Success")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess("")
                setError(error.message);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <p className="text-red-500">{error}</p>
                <p>{success}</p>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            id="email"
                            type="email"
                            name="email"
                            required
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
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <Link
                            to='/signUp'
                            className="text-blue-500 hover:underline text-sm"
                        >Sign Up</Link>
                        <a
                            className="text-blue-500 hover:underline text-sm"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <span className="text-gray-600 mr-2">Or sign in with:</span>
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
                                    d="M12 21c-1.8 0-3.3-.6-4.5-1.7L4 21l1.2-3.6C3.6 15.5 3 13.6 3 11.5s.6-4 2.2-5.4L4 2h6v2H6.6C4.9 4 3.5 6 3.5 8.2S4.9 12.5 6.6 13h5.8c1.7 0 3.1 1.9 3.1 4.1S14,16.9 14,19 16 17.3 16 15.5 16h-2.35z"
                                ></path>
                            </svg>
                            <span onClick={handleGoogleSignIn} className="text-gray-600">Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;