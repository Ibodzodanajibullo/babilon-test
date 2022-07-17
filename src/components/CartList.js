import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import data from "./ShirtsItems";
import Delete from "./Delete";

function CartList() {
    const [price, setPrice] = useState(0);
    const [cartLists, setCartLists] = useState([]);

    useEffect(() => {
        setPrice(cartLists.reduce((total, {price}) => total + price, 0));
    }, [cartLists]);

    const addToCart = item => setCartLists([...cartLists, item]);

    const removeFromCart = index =>
        setCartLists(cartList => cartList.filter((_, i) => i !== index));

    const clearCart = () => setCartLists([]);
    return (
        <div className="list-cart">
            <h1>Shopping Cart</h1>
            <div className="my-2 bg-secondary p-3 text-white d-inline-block">
                <div className="font-weight-bold">
                    <span className="totalities">{cartLists.length}</span> - $
                    <span className="totality">{price}</span>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        {/* cart item lists */}
                        <div className="w-50 text-left">
                            <h3>Cart Lists</h3>
                            {cartLists.map(({image, price, text}, index) => (
                                <div
                                    key={`${text}-${index}`}
                                    className="d-flex justify-content-between mb-3"
                                >
                                    <img alt={image} src={image} className="w-25"/>
                                    <div className="d-flex mt-2 flex-column">
                                        <h3>{text}</h3>
                                        <h3 className="ml-auto price">${price}</h3>
                                    </div>
                                    <Delete onClick={() => removeFromCart(index)}>Delete</Delete>
                                </div>
                            ))}

                            <h3>
                                Total $<span className="">{price}</span>
                            </h3>
                            <div className="d-flex my-3">
                                <button
                                    className="btn btn-secondary clearCart"
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                        {/* filter section */}
                        <div className="row mt-3">
                            <Filter data={data} countBtn={addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartList;