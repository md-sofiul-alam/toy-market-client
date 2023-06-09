import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png"


const Footer = () => {
    return (
        <>
            <div className="bg-indigo-600 text-white">
                <footer className="footer p-10 text-base-content">
                    <div>
                        <img src={logo} alt="" />
                        <address className="text-white">
                            Village: Khalilpur, <br/>
                            Post: Bhorajagotpur, <br/>
                            Thana: Lalmai, <br/>
                            District: Cumilla. <br/>
                            008801914708856
                        </address>
                    </div>
                    <div>
                        <span className="footer-title text-black">Category</span>
                        <a className="link link-hover text-white">Racing Car</a>
                        <a className="link link-hover text-white">Sports Car</a>
                        <a className="link link-hover text-white">Regular Car</a>
                        <a className="link link-hover text-white">Mini Fire truck</a>
                    </div>
                    <div>
                        <span className="footer-title text-black">Pages</span>
                        <Link to='/' className="link link-hover text-white">Home</Link>
                        <Link to='/blogs' className="link link-hover text-white">Blogs</Link>
                        <Link to='/login' className="link link-hover text-white">Login</Link>
                        <Link to='/signup' className="link link-hover text-white">Sign Up</Link>
                    </div>
                    <div>
                        <span className="footer-title text-black">Social Links</span>
                        <a className="link link-hover text-white">Facebook</a>
                        <a className="link link-hover text-white">LinkedIn</a>
                        <a className="link link-hover text-white">Tweeter</a>
                        <a className="link link-hover text-white">Instagram</a>
                    </div>
                    <div>
                        <span className="footer-title text-black">Legal</span>
                        <a className="link link-hover text-white">Terms of use</a>
                        <a className="link link-hover text-white">Privacy policy</a>
                        <a className="link link-hover text-white">Cookie policy</a>
                    </div>
                </footer>
                <div className="text-center p-5 bg-indigo-500">
                    <small>&copy; {new Date().getFullYear()} - All right reserved by Toy Car</small>
                </div>
            </div>
        </>
    );
};

export default Footer;