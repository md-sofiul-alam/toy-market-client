import { Link, useRouteError } from "react-router-dom";
import fof from '../../../src/assets/404.gif'


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex justify-center items-center h-screen text-center bg-red-200">
            <div>
                <h1 className="text-6xl text-orange-500">Oops!</h1>
                <img className="w-1/2 block mx-auto my-10" src={fof} alt="" />
                <p className="text-red-500">Sorry, an unexpected error has occurred.</p>
                <p className="text-red-500">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link className="btn btn-primary mt-10" to='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;