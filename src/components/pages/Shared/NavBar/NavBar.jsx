import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../../assets/logo.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result?.user)
            })
            .catch(error => { console.error(error) })
    }

    const navItems = <>
        <li><Link to='/' className='font-medium'>Home</Link></li>
        <li><Link to='/allToys' className='font-medium'>All Toys</Link></li>
        <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
        {
            user &&
            <>
                <li><Link to='/addToys' className='font-bold'>Add Toy</Link></li>
                <li><Link to='/myToys' className='font-bold'>My Toys</Link></li>
            </>
        }
    </>
    
    return (
        <div className="bg-emerald-200 text-blue-600">
            <div className="navbar max-w-6xl mx-auto lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-emerald-300 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end text-end" >
                    <span className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                        {user
                            ?
                            <>
                                <button onClick={handleLogout} className='text-red-400 font-bold'>Log Out</button>
                                <img className='h-10 w-10 avatar mask mask-hexagon btn-circle text-end ms-5' src={user?.photoURL} />
                            </>
                            : <Link to='/login' className='font-bold btn btn-circle btn-info text-[12px]'>Login</Link>
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;