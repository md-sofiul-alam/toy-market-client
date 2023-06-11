import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-zinc-500 text-white">
        <footer className="footer p-10 text-base-content">
          <div>
            <img src={logo} alt="" />
            <address className="text-white">
              House: 7/7,
              <br />
              Road: Mirpur-7,
              <br />
              Dhaka-1212, <br />
              <br />
              Cont: 008800000000
            </address>
          </div>
          <div>
            <span className="footer-title text-white font-semibold">
              Social Links
            </span>
            <a className="link link-hover text-white">Facebook</a>
            <a className="link link-hover text-white">LinkedIn</a>
            <a className="link link-hover text-white">Tweeter</a>
            <a className="link link-hover text-white">Instagram</a>
          </div>
          <div>
            <span className="footer-title text-white font-semibold">Pages</span>
            <Link to="/" className="link link-hover text-white">
              Home
            </Link>
            <Link to="/blogs" className="link link-hover text-white">
              Blogs
            </Link>
            <Link to="/login" className="link link-hover text-white">
              Login
            </Link>
            <Link to="/signup" className="link link-hover text-white">
              Sign Up
            </Link>
          </div>
          <div>
            <span className="footer-title text-white font-semibold">
              Category
            </span>
            <a className="link link-hover text-white">Police Car</a>
            <a className="link link-hover text-white">Sports Car</a>
            <a className="link link-hover text-white">Regular Car</a>
            <a className="link link-hover text-white">Racing Car</a>
          </div>
          <div>
            <span className="footer-title text-white font-semibold">Legal</span>
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </div>
        </footer>
        <div className="text-center p-5 bg-emerald-200 text-blue-600 font-medium">
          <small>
            &copy; {new Date().getFullYear()} - All right reserved by Your Toy
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
