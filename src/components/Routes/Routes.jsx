
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToys from "../Pages/AddToys/AddToys";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToyData from "../Pages/MyToys/UpdateToyData";
import MyToys from "../Pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/allToys',
                element: <AllToys />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys /></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://your-toy.vercel.app/gallery/${params.id}`)
            },
            {
                path: '/updateToyData/:id',
                element: <PrivateRoute><UpdateToyData/></PrivateRoute>,
                loader: ({params}) => fetch(`https://your-toy.vercel.app/toys/${params.id}`)
            }
        ]
    }
]);

export default router;