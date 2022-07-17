import shirt3 from '../assets/shirts3.jpg'
import {Link} from "react-router-dom";
import {Button, List, Popover} from 'antd';
import React, {useState} from 'react';
import data from "./ShirtsItems";


const Content = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <List
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <div>
                        <img className="cart-item-image" src={shirt3}/>
                        {item.title}
                        {item.price}
                    </div>
                    <h1>{count}</h1>
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                </List.Item>
            )}
        />
    );
}
const Header = () => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
    };
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
                                <Link to="/shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                        </ul>
                        <a href="#" className="navbar-brand">𝓐𝓱𝓪Z.</a>
                        <Popover
                            className="cart"
                            content={Content}

                            title="Shirt"
                            trigger="click">
                            <Button>Add to cart</Button>
                        </Popover>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;