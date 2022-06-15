import cart from '../assets/cart.png'
const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-wrap">
                        <ul className="navbar-menu">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                        </ul>
                        <a href="#" className="navbar-brand">𝓐𝓱𝓪Z.</a>
                        <img className="cart" src={cart} width="50px" height="50px"/>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;