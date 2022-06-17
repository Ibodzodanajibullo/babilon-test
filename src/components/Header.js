import cart from '../assets/cart.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="containe">
                    <div className="navbar-wrap">
                        <ul className="navbar-menu">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <Link to="/shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                             </li>
                        </ul>
                        <a href="#" className="navbar-brand">𝓐𝓱𝓪Z.</a>
                        <button className="cart" ><img src={cart} width="30px" height="40px"/>add cart</button>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;